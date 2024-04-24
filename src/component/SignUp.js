import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserSignUp } from "../redux/action/action";
import { toast } from "react-toastify";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");

  const data = {
    id: Date.now(),
    username: userName,
    password: password,
  };

  const dispatch = useDispatch();

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
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />

        <label>Password:</label>
        <br />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <br />
        <button
          onClick={() => {
            if (userName !== "" && password !== "") {
              dispatch(setUserSignUp(data));
              setUserName("");
              setpassword("");
              //   toast.success("Registration successfully please login!!!!!!",
              //   {position: "top-right",
              //   autoClose: 1000,
              //   hideProgressBar: false,
              //   closeOnClick: true,
              //   pauseOnHover: true,
              //   draggable: true,
              //   progress: undefined,
              //   theme: "colored",
              // });
              window.location.href = "/login";
              // navigate('/login')
            } else {
              return toast.warn("fill the credentials....", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          }}
        >
          Signup
        </button>
        <br />
        <Link to="/login">Already SignUp...Please Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
