import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

import ProductsCard from "./ProductsCard";

const Products = () => {
  const products = useLoaderData();
  const [book, setBook] = useState([]);
  return (
    <div className="flex justify-center">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
        {products.map((product) => (
          <ProductsCard
            id={product._id}
            setBook={setBook}
            product={product}
          ></ProductsCard>
        ))}
      </div>
      {book && <BookingModal setBook={setBook} book={book}></BookingModal>}
    </div>
  );
};

export default Products;
