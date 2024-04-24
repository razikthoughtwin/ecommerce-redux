import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../redux/action/action";

const ProductDetail = () => {
  const { id } = useParams();
  // console.log(id);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchproduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      // console.log(`details`,response.data);

      dispatch(selectedProducts(response.data));
    };

    if (id && id !== "") {
      fetchproduct();
    }
  }, [dispatch, id]);

  // console.log(product);
  return (
    <div className="product-detail-container">
      <div className="main-detail-container">
        <div className="left-container">
          <h1>{product.category}</h1>
          <img src={product.image} alt="detalsimage" />
        </div>

        <div className="right-container">
          <h3>
            {product.category} || {product.title}
          </h3>
          <br />
          <button disabled className="detail-btn">
            $ {product.price}
          </button>
          <br />
          <h5>{product.description}</h5>
          <br />
          {/* <button disabled>$ {product.rating.count}</button> */}
          <button className="detail-btn">$ {product.price}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
