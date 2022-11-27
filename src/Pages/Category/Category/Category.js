import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Category = () => {
  // const [categories, setCategories] = useState([]);

  const { data: categories = [] } = useQuery({
    queryKey: ["books-categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/books-categories");
      const data = res.data;
      console.log(data);
      return data;
    },
  });

  // React.useEffect(() => {
  //   axios.get("http://localhost:5000/books-categories").then((response) => {
  //     setCategories(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/books-categories")
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);

  return (
    <div className="py-14">
      <h2 className="text-center font-semibold text-3xl my-4 border bottom-3 border-sky-300 rounded-lg py-5 uppercase">
        Books Category
      </h2>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6">
        {categories.map((category) => (
          <CategoryCard id={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
