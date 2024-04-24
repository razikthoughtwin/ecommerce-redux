import React, { useState } from "react";
// import banner2 from "../assets/banner2.jpeg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const local = JSON.parse(localStorage.getItem("user"));
    // console.log(local);
    const checkuser = local.find((item) => {
      return item.username === username && item.password === password;
    });

    if (checkuser) {
      localStorage.setItem("token", true);
      toast.success("login successfull", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      window.location.href = "/";
      // navigate('/')
      setUserName("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      {/* <div className="left-login">
        <img src={banner3} alt="login" width="00%" height="100%"/>
    </div> */}
      <div className="left-login">
        <label>Email:</label>
        <br />

        <input
          type="email"
          placeholder="Enter Your Email"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <br />

        <label>Password:</label>
        <br />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />

        <button onClick={() => handleLogin()}>Login</button>
        <br />

        <Link to="/signup">Create your Account here.....</Link>
      </div>
    </div>
  );
};

export default Login;
