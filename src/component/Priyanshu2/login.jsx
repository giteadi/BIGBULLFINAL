import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImage from './../../Assets/loginImage.png';

import styled from "styled-components";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:6060/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <StyledContact>
        <div className="container py-5 mx-auto">
          <div className="flex flex-col items-center main-container">
            <div className="py-3 text-center heading">
              <h1 className="text-2xl md:text-8xl font-bold mb-10">Login</h1>
            </div>

            <div className="w-full p-2.5 rounded-lg shadow-lg parent-container md:w-10/12 py-10">
              <div className="grid justify-between grid-cols-1 sm:grid-cols-2 child-container md:flex-row">
                <div style={{backgroundImage: loginImage}} className="w-full login-image bg-no-repeat bg-contain bg-center">
                  {/* <img className='object-cover register-img' src={loginImage} alt="" width='100%'/> */}
                </div>

                <div className="w-full box">
                  <div className="flex justify-center">
                    <form className="w-10/12 form" onSubmit={handleFormSubmit}>
                      <div className="p-4 inputs">
                        <div className="">
                          <div className="w-full mx-auto text-lg column-1 md:w-11/12">
                            <label className="text-gray-700 py-2.5" htmlFor="form4Example2">
                              Email
                            </label>
                            <input
                              type="email"
                              id="form4Example2"
                              className="w-full p-2 mb-2 border border-gray-400 rounded email form-control"
                              placeholder="Enter your Email"
                              value={email}
                              onChange={handleEmailChange}
                            />
                          </div>

                          <div className="w-full mx-auto text-lg column-2 md:w-11/12">
                            <div className="">
                              <label htmlFor="form4Example2" className="text-gray-700 py-2.5">
                                Password
                              </label>
                              <div className="relative">
                                <input
                                  type={showPassword ? "text" : "password"}
                                  className="w-full p-2 border border-gray-400 rounded form-control"
                                  placeholder="Enter your Password"
                                  value={password}
                                  onChange={handlePasswordChange}
                                />
                                <div className="absolute cursor-pointer right-3 top-3" onClick={togglePasswordVisibility}>
                                  {showPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center px-4 pt-4 mb-3 form-check my-3">
                          <button
                            type="submit"
                            className="w-8/12 py-2 text-white bg-red-600 rounded-full login-btn btn md:w-8/12 hover:bg-red-500"
                          >
                            Log In
                          </button>
                        </div>
                        <div className="flex justify-between py-2 bottom-forgetaccount">
                          <div className="forget-pass">
                            <p className="text-gray-700">
                              <Link to="/Forget" className="underline">
                                
                                Forgot Password?
                              </Link>
                            </p>
                          </div>

                          <div className="no-account">
                            <p className="text-gray-700">
                              Don't have an account?{" "}
                              <Link to={'/EnrollForm'} className="px-1 underline register-link">
                                Enroll Now
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledContact>
    </>
  );
}

export default Login;
const StyledContact = styled.div`
  .login-image {
    background-image: url(${loginImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;