import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    // TODO: add publisher key
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <div className="pt-24">
            <h2 className="text-3xl font-bold text-center">Be Premium user & explore our exclusive News</h2>
         <div>
            <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
            </Elements>
         </div>
        </div>
    );
};

export default Payment;