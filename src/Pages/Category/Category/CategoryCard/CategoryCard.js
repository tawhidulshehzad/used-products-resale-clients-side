import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { name, id } = category;
  return (
    <div>
      <Link to={`/products/${id}`}>
        <div className="card  bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
