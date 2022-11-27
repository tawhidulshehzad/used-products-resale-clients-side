import React from "react";

const ProductsCard = ({ product, setBook }) => {
  const {
    name,
    img,
    location,
    seller_name,
    years_of_use,
    time,
    resale_price,
    original_price,
  } = product;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img style={{ height: "230px", width: "400px" }} src={img} alt="" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Original Price: ${original_price}</p>
        <p>
          Resale Price: <span className="text-2xl">${resale_price}</span>
        </p>
        <p>Post time: {time} Hours ago</p>
        <p>{years_of_use} Year used</p>
        <p> Seller Name: {seller_name} </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline uppercase">{location}</div>
        </div>

        <div className="card-actions">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary"
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
