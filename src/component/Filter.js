import React from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../redux/action/action";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className="filter-container">
      <button onClick={() => dispatch(filterProducts())}>All Products</button>
      <button onClick={() => dispatch(filterProducts("men's clothing"))}>
        Men's clothing
      </button>
      <button onClick={() => dispatch(filterProducts("women's clothing"))}>
        Women's clothing
      </button>
      <button onClick={() => dispatch(filterProducts("electronics"))}>
        Electronics
      </button>
      <button onClick={() => dispatch(filterProducts("jewelery"))}>
        Jewelery
      </button>
    </div>
  );
};

export default Filter;
