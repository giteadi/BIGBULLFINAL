import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBar = ({ checked, setChecked = '' }) => {
  const [userLockedIn, setUserLockedIn] = useState(false);

  function fetchUser () {
    let getUser = localStorage.getItem('bigbullUser');
    console.log(getUser);
    if(getUser) setUserLockedIn(true);                      
  }

  const handleClick = () => {
    setChecked(!checked);
    console.log('heere');
  }
  useEffect(() => {
    fetchUser();
  })
  return (
    <>
      <Contaienr>
        {checked && <div className="backdrop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[30]" />}
        <div
          className={`wrapper ${
            checked ? "sidebar-active" : ""
          } z-40 pt-16 sm:p-0 transition-[right,clip-path] duration-700	top-0 ease-in-out fixed right-0 w-full md:w-[40vw] bg-white text-black h-screen sm:h-full `}
        >
          <div className="h-full flex justify-center items-center ">
            <ol className="list-none">
            <li onClick={handleClick} className="sm:my-10 xl:my-16 text-3xl my-9 sm:text-4xl md:text-[3vw] leading-7 font-medium text-black font-serif hover:scale-125 transition-all duration-300 ease-in-out">
                <Link to="/">Home</Link>
              </li>
              <li onClick={handleClick} className="sm:my-10 xl:my-16 text-3xl my-9 sm:text-4xl md:text-[3vw] leading-7 font-medium text-black font-serif hover:scale-125 transition-all duration-300 ease-in-out">
                <Link to="/courses">Courses</Link>
              </li>
              <li onClick={handleClick} className="sm:my-10 xl:my-16 text-3xl my-9 sm:text-4xl md:text-[3vw] leading-7 font-medium text-black font-serif hover:scale-125 transition-all duration-300 ease-in-out">
                <Link to="/about">About</Link>
              </li>
              <li onClick={handleClick} className="sm:my-10 xl:my-16 text-3xl my-9 sm:text-4xl md:text-[3vw] leading-7 font-medium text-black font-serif hover:scale-125 transition-all duration-300 ease-in-out">
                <Link to="/about">Blogs</Link>
              </li>
              <li onClick={handleClick}  className="sm:my-10 xl:my-16 text-3xl my-9 sm:text-4xl md:text-[3vw] leading-7 font-medium text-black font-serif hover:scale-125 transition-all duration-300 ease-in-out">
                <Link to="/ContactUs">Contact Us</Link>
              </li>
              {
                  !userLockedIn 
                  ? <>
                          <li onClick={handleClick} className="sm:my-10 xl:my-16 text-3xl my-9 sm:text-4xl md:text-[3vw] leading-7 font-medium text-black font-serif hover:scale-125 transition-all duration-300 ease-in-out">
                          <Link to="/EnrollForm">Enroll Now</Link>
                        </li>
                        <li onClick={handleClick} className="sm:my-10 xl:my-16 text-3xl my-9 sm:text-4xl md:text-[3vw] leading-7 font-medium text-black font-serif hover:scale-125 transition-all duration-300 ease-in-out">
                          <Link to="/login">Log In</Link>
                        </li>
                    </> 
                  : <>
                      <li onClick={handleClick}  className="sm:my-10 xl:my-16 text-3xl my-9 sm:text-4xl md:text-[3vw] leading-7 font-medium text-black font-serif hover:scale-125 transition-all duration-300 ease-in-out">
                    <Link to="/Cart">Cart</Link>
                  </li>
                  <li onClick={handleClick}  className="sm:my-10 xl:my-16 text-3xl my-9 sm:text-4xl md:text-[3vw] leading-7 font-medium text-black font-serif hover:scale-125 transition-all duration-300 ease-in-out">
                    <Link to="/profile">Profile</Link>
                  </li>
                    </>
              }
              
            </ol>
          </div>
        </div>
      </Contaienr>
    </>
  );
};

export default SideBar;
const Contaienr = styled.div`

  .wrapper {
    clip-path: inset(0 0 0 100%);
  }
  .sidebar-active {
    clip-path: inset(0 0 0 0);
  }
`;
