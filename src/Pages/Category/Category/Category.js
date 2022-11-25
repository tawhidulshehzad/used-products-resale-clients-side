import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-center font-semibold text-3xl my-4 border bottom-3 border-sky-300 rounded-lg py-2 uppercase">
        Books Category
      </h2>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
        {categories.map((category) => (
          <CategoryCard id={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
