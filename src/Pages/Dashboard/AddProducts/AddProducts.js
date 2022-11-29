import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddProducts = (event) => {
    event.preventDefault();
    const form = event.target;
    const category_id = form.ctid.value;
    const name = form.name.value;
    const location = form.location.value;
    const resale_price = form.resale_price.value;
    const original_price = form.original_price.value;
    const years_of_use = form.years_of_use.value;

    const seller_name = form.seller_name.value;
    const email = user?.email || "unregistered";
    const img = form.img.value;
    const newProduct = {
      category_id,
      name,
      location,
      resale_price,
      original_price,
      years_of_use,
      time: Date(),
      seller_name,
      img,
      email,
    };

    fetch("http://localhost:5000/newproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        
        if (data.acknowledged) {
          toast.success("Product has taken");
          form.reset();
          navigate("/allnewproducts");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className=" p-7">
      <h2 className="text-2xl font-semibold my-3">Add a new product</h2>
      <form onSubmit={handleAddProducts} className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
      
        <input
          name="ctid"
          type="text"
          placeholder="category ID should be (01, 02, 03)"
          className="input-bordered input w-full"
        />
        <input
          name="name"
          type="text"
          placeholder="Book Name"
          className="input-bordered input w-full"
        />
        <input
          name="location"
          type="text"
          placeholder="Type Location"
          className="input-bordered input w-full"
        />
        <input
          name="resale_price"
          placeholder="Resale Price"
          type="text"
          className="input-bordered input w-full"
        />
        <input
          name="original_price"
          Placeholder="Original Price"
          type="text"
          className="input-bordered input w-full"
        />
        <input
          name="years_of_use"
          placeholder="Years of Use"
          type="text"
          className="input-bordered input w-full"
        />
        {/* <input
          name="time"
          placeholder="Upload Time"
          type="text"
          className="input-bordered input w-full"
        /> */}
        <input
          name="seller_name"
          placeholder="seller name"
          type="text"
          className="input-bordered input w-full"
        />
        <input
          name="img"
          placeholder="Image Url"
          type="text"
          className="input-bordered input w-full"
        />
        {/* <input
              name="email"
              // defaultValue={user?.email}
              disabled
              type="text"
              placeholder="Email"
              className="input-bordered input w-full"
            /> */}

        <br />
        <input
          className="w-full btn btn-primary rounded-lg"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
