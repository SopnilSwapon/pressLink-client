import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('');
    const axiosPublic = useAxiosPublic();

    useEffect(() =>{
    axiosPublic('/create-payment-intent')
    }, [])
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if(error){
            console.log("payment error", error);
            setPaymentError(error.message)
        }
        else{
            console.log('payment method', paymentMethod);
            setPaymentError('')
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