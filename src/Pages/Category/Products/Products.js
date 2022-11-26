import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  return (
    <div className="flex justify-center">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
        {products.map((product) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                style={{ height: "230px", width: "400px" }}
                src={product.img}
                alt=""
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">
                {product.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Original Price: ${product.original_price}</p>
              <p>
                Resale Price:{" "}
                <span className="text-2xl">${product.resale_price}</span>
              </p>
              <p>Post time: {product.time} Hours ago</p>
              <p>{product.years_of_use} Year used</p>
              <p> Seller Name: {product.seller_name} </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{product.location}</div>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
