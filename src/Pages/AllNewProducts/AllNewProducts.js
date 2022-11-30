import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AllNewProducts = () => {
  const { user } = useContext(AuthContext);
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/newproducts?email=${user?.email}`, {})
      .then((response) => response.json())
      .then((data) => {
        setNewProducts(data);
      });
  }, [user?.email]);

  // delete function
  const handleDelete = (id) => {
    console.log("products", id);
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/newproducts/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = newProducts.filter((rvw) => rvw._id !== id);
            setNewProducts(remaining);
            toast("Successfully deleted");
          }
        });
    }
  };

  return (
    <div className="py-6">
      <h2 className="text-3xl font-semibold">All My Products</h2>
      <div className="flex justify-center">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
          {newProducts.map((product) => (
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
                  <div className="badge badge-outline uppercase">
                    {product.location}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleDelete(product._id)}
                className="btn btn-primary btn-sm"
              >
                Delete Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNewProducts;
