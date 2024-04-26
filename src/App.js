import { useDispatch } from "react-redux";
import "./App.css";
import ProductListing from "./component/ProductListing";
// import axios from "axios";
import { fetchproducts} from "./redux/action/action";
import { useEffect } from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";
import Filter from "./component/Filter";
import Login from "./component/Login";
import Signup from "./component/SignUp";
import AddToCart from "./component/AddToCart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await axios.get("https://fakestoreapi.com/products");
    //   console.log("??????????????????",response.data)
    //   dispatch(setProducts(response.data));
    // };
    // fetchData();

    dispatch(fetchproducts());

  }, [dispatch]);

  const token = localStorage.getItem("token");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {token && <Route path="/addtocart" element={<AddToCart />} />}
          <Route
            path="/"
            element={
              <>
                <Header />
                {token && <Filter />}
                <Banner />
                <div className="App">
                  <div className="card-main">
                    <ProductListing />
                  </div>
                </div>
              </>
            }
          />

          <Route path="/productdetail/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
