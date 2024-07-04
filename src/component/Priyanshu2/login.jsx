import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slicer/userSlicer';

import loginImage from './../../Assets/loginImage.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Simulating a successful login response
    const userData = {
      email,
      password,
      // Any other user data you want to store in Redux state
    };
    dispatch(setUser(userData)); // Dispatch action to set user
    console.log("Form submitted:", userData); // Log form submission data
  };

  // Disable right-click context menu
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      console.log('Right-click disabled');
    };

    document.addEventListener('contextmenu', handleContextMenu);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      <StyledContact>
        <div className="container py-5 mx-auto">
          <div className="flex flex-col items-center main-container">
            <div className="py-3 text-center heading">
              <h1 className="text-4xl md:text-7xl font-bold mb-10">Login</h1>
            </div>

            <div className="w-full p-2.5 rounded-lg shadow-lg parent-container md:w-12/12 lg:w-10/12 py-10">
              <div className="grid justify-between grid-cols-1 sm:grid-cols-2 child-container md:flex-row">
                <div className="w-full login-image bg-no-repeat bg-contain bg-center" style={{ backgroundImage: `url(${loginImage})` }}></div>

                <div className="w-full box">
                  <div className="flex justify-center">
                    <form className="w-10/12 form" onSubmit={handleFormSubmit}>
                      <div className="p-4.5 max-sm:p-0 inputs">
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
                            className="w-8/12 py-2 text-white rounded-full md:w-8/12 bg-red-700 hover:bg-red-800"
                          >
                            Log In
                          </button>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap max-sm:gap-y-2.5 justify-between py-2 bottom-forgetaccount">
                          <div className="forget-pass">
                            <p className="text-gray-700">
                              <Link to="/Forget" className="underline">
                                Forgot Password?
                              </Link>
                            </p>
                          </div>

                          <div className="no-account">
                            <p className="text-gray-700">
                              Don't have an account?{' '}
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
