import { Link } from "react-router-dom";
import logo from "./../../public/logo/logo.png";
import SideBar from "./sidebar";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [userLockedIn, setUserLockedIn] = useState(false);

  function fetchUser () {
    let getUser = localStorage.getItem('bigbullUser');
    console.log(getUser);
    if(getUser) setUserLockedIn(true);
  }
  console.log(isChecked);
  useEffect(() => {
    
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setIsChecked(false);
      } 
    };

    fetchUser();

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
     <nav style={{ maxWidth: "1728px" }} className="border-gray-200 dark:bg-gray-900 w-full bg-white pt-3 mb-20 mx-auto px-5">
  <div className="flex flex-wrap items-center justify-between mx-auto">
    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse sm:w-32 w-24 z-50">
      {/* Replace with your logo */}
      <img src={logo} className="w-full" alt="Logo" />
    </Link>

    {/* Mobile Menu Toggle */}
    <div className="sm:hidden">
      <div className="z-10">
        {/* Replace with your sidebar or mobile menu component */}
        <SideBar checked={isChecked} setChecked={setIsChecked} />
      </div>
      <div className="pr-14" onClick={() => setIsChecked(!isChecked)}>
        {/* Example menu icon */}
        <IoMenu className="menu-bar z-50 absolute mt-[20px] top-0 text-4xl sm:text-6xl transform	-translate-x-1/5" color={`black`} />
      </div>
    </div>

    {/* Desktop Menu Links */}
    <div className=" md:order-2 flex items-center gap-2">
    <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse hidden sm:block">
      <Link to={userLockedIn ?  "/cart" :"/EnrollForm"} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center">
      {userLockedIn ? 'Cart' : "Enroll Now"}
      </Link>
    </div>
      <div>
          <Link to={userLockedIn ?  "/profile" :"/login"} className="block md:py-2 md:px-3 text-xl text-black text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
          {userLockedIn ? 'Profile' : "Log In"}
          </Link>
        </div>
    </div>

    {/* Mobile and Tablet Menu */}
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul className="flex flex-col font-medium md:p-0 rounded-lg bg-transparent lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to={"/"} className="block md:py-2 md:px-3 text-xl hover:underline hover:underline-offset-8 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105" aria-current="page">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/courses"} className="block md:py-2 md:px-3 text-xl text-black text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
            Courses
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="block md:py-2 md:px-3 text-xl text-black md:text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
            About
          </Link>
        </li>
        <li>
          <Link to={"/blogs"} className="block md:py-2 md:px-3 text-xl text-black text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
            Blogs
          </Link>
        </li>
        <li>
          <Link to={"/ContactUs"} className="block md:py-2 md:px-3 text-xl text-black text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
            Contact Us
          </Link>
        </li>
        {/* <li>
          <Link to={"/Cart"} className="block md:py-2 md:px-3 text-xl text-black text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
            Cart
          </Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

    </>
  );
};
export default Navbar;
