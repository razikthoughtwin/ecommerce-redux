import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddToCart } from "../redux/action/action";
import { Link } from "react-router-dom";
import loading from "../assets/loading.jpeg";

const ProductListing = () => {
  const products = useSelector((state) => state.allproducts.products);
  // const { id, title } = products;
  const dispatch = useDispatch();

  const filterdata = useSelector((state) => state.allproducts.filterdata);
  // console.log("categoryData", filterdata);

  // console.log("products", products);

  const quantity = 1;

  const cartitems = useSelector((state) => state.addtocart.cart);

  // console.log(cartitems);

  const token = localStorage.getItem("token");

  // const navigate = useNavigate();

  if (products.length === 0) {
    return <img src={loading} alt="loader" />;
  }

  const renderList =
    filterdata.length <= 0
      ? products.map((item) => {
          const { id, image, title, price } = item;
          return (
            <div className="card-container" key={item.id}>
              <Link to={`/productdetail/${item.id}`}>
                <div className="" key={item.title}>
                  <div className="card-image">
                    <img src={item.image} alt="listimage" />
                  </div>
                  <div className="card-text">
                    {item.title}
                    <br />$ {item.price}
                  </div>
                </div>
              </Link>
              {token && (
                <button
                  className="cart-btn"
                  disabled={cartitems.find((item) => {
                    return item.id === id ? true : false;
                  })}
                  onClick={() => {
                    dispatch(
                      setAddToCart({ id, image, title, price, quantity })
                    );
                  }}
                >
                  ADD To Cart
                </button>
              )}
            </div>
          );
        })
      : filterdata.map((item) => {
          const { id, image, title, price } = item;
          return (
            <div className="card-container" key={item.id}>
              <Link to={`/productdetail/${item.id}`}>
                <div className="" key={title}>
                  <div className="card-image">
                    <img src={item.image} alt="listimage" />
                  </div>
                  <div className="card-text">
                    {item.title}
                    <br />$ {item.price}
                  </div>
                </div>
              </Link>
              {token && (
                <button
                  disabled={cartitems.find((item) => {
                    return item.id === id ? true : false;
                  })}
                  className="cart-btn"
                  onClick={() => {
                    dispatch(
                      setAddToCart({ id, image, title, price, quantity })
                    );
                  }}
                >
                  ADD To Cart
                </button>
              )}
            </div>
          );
        });

  return (
    <>
      {renderList}
      {/* <AddToCart/> */}
    </>
  );
};

export default ProductListing;
