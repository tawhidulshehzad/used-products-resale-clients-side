import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const ProductsCard = ({ product, setBook }) => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://bookworm-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const {
    name,
    img,
    location,
    seller_name,
    years_of_use,
    time,
    resale_price,
    original_price,
    email,
  } = product;

  const handleReport = () => {
    const report = {
      name,
      img,
      location,
      seller_name,
      years_of_use,
      time,
      resale_price,
      original_price,
      email,
    };
    console.log("try");
    fetch("https://bookworm-server.vercel.app/report", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setBook(null);
          toast.success("Report confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img style={{ height: "230px", width: "400px" }} src={img} alt="" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          {name}
          <div className="">
            {users.map((user, i) => (
              <div key={user._id}>
                {user?.verify === "verified" && email === user?.email ? (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ))}
          </div>
        </h2>
        <p>Original Price: ${original_price}</p>
        <p>
          Resale Price: <span className="text-2xl">${resale_price}</span>
        </p>
        <p>Post time: {time} Hours ago</p>
        <p>{years_of_use} Year used</p>
        <p> Seller Name: {seller_name} </p>
        <div className="card-actions justify-between py-3">
          <div className="capitalize">Lolcation: {location}</div>
          <div onClick={handleReport} className="btn btn-primary btn-sm capitalize">
            Report
          </div>
        </div>

        <div className="card-actions">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary btn-sm"
            onClick={() => setBook(product)}
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
