import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();

  const { price, bookName } = booking;
  console.log(booking);
  return (
    <div className="flex justify-center py-8 ">
      <div className="shadow-md p-5">
        <h3 className="text-3xl py-3 capitalize ">Payment for {bookName}</h3>
        <p className="text-xl capitalize">
          Please pay <strong>${price}</strong> 
        </p>
        <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
