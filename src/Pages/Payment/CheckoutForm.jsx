import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from '@tanstack/react-query'
import moment from "moment";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState('');
  const axiosPublic = useAxiosPublic();
  const [transactionId, setTransactionId] = useState('');
  const { user } = useAuth();

  // load payment info
  const { data: paymentInfo = {} } = useQuery({
    queryKey: ['paymentInfo', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payment/${user?.email}`);
      return res.data;
    }
  })
  const { price, plan, validation } = paymentInfo;
  useEffect(() => {
    if (price > 0) {
      axiosPublic.post('/create-payment-intent', {price})
        .then(res => {
          setClientSecret(res.data.clientSecret);
        })
    }
  }, [axiosPublic, price])
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    })
    if (error) {
      console.log("payment error", error);
      setPaymentError(error.message)
    }
    else {
      console.log('payment method', paymentMethod);
      setPaymentError('')
    }
    // confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })
    if (confirmError) {
      console.error('confirm error')
    }
    else {
      // console.log('payment intent: ', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        // console.log('transaction id: ', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment info in the database
        const updatedPaymentInfo = {
          user: user?.email,
          transactionId: paymentIntent.id,
          premium_taken: moment().format("YYYY-MM-DD HH:mm:ss"),
          status: 'paid'
        }

        const res = await axiosPublic.patch(`/payment/${user?.email}`, updatedPaymentInfo);

        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Congrats!! Now You are premium user.`,
            showConfirmButton: false,
            timer: 1500
          });
          const updatedUser = {
            premium_taken: moment().format("YYYY-MM-DD HH:mm:ss"),
            expires_on: moment().clone().add(validation, "minute").format("YYYY-MM-DD HH:mm:ss"),
            isPremium: true,
            current_plan: plan,
            last_transaction_ID: paymentIntent.id
          }

          // update user info after successful payment
          const result = await axiosPublic.put(`/user/${user?.email}`, updatedUser);

          if (result.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Congrats!! Now You are premium user.`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      }
    }
  }
  return (
    <form className="min-h-[calc(100vh-460px)]" onSubmit={handleSubmit}>
      <CardElement className="w-full bg-blue-100 py-4 px-2   md:w-[30%] mx-auto mt-10"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className="flex justify-center">
        <button className="btn btn-sm mt-2 flex justify-center btn-primary" type="submit" disabled={!stripe}>
          Pay
        </button>
      </div>
      <p className="text-red-600 text-center pt-2">{paymentError}</p>
    </form>
  );
};

export default CheckoutForm;