import React from 'react';
import { Link } from 'react-router-dom';
// import Babbar from "../../Assets/Astha/babbar.jpg"
const ProfileComponent = () => {
    return (
        <div className="bg-gradient-to-br from-red-700 via-red-800 to-black text-white min-h-screen">
            {/* Navbar */}
            <nav className="py-4">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <a href="#" className="text-lg font-semibold uppercase">Example Profile</a>
                    <div className="flex items-center space-x-4">
                        <button className="md:hidden focus:outline-none">
                            {/* Insert SVG for menu icon */}
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                {/* SVG paths for menu icon */}
                            </svg>
                        </button>
                        {/* Dropdown content */}
                        <div className="hidden md:flex space-x-4 items-center">
                            {/* Dropdown items */}
                            <a href="#" className="hover:text-gray-300">Settings</a>
                            <a href="#" className="hover:text-gray-300">Help</a>
                            <a href="#" className="hover:text-gray-300">Logout</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Profile Content */}
            <div className="container mx-auto py-6 md:px-4 md:max-xl:px-1">
                <div className="md:flex no-wrap md:-mx-2">
                    {/* Left Side */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        {/* Profile Card */}
                        <div className="bg-white max-md:p-4 md:p-1 lg:p-4 rounded-lg shadow-lg border-t-4 border-red-900">
                            <div className="flex flex-col items-center justify-center mb-6">
                                {/* Profile image */}
                                <img className="rounded-full h-32 w-32 border-4 border-red-900"
                                    src='https://i.ytimg.com/vi/W43v7ePnjAA/maxresdefault.jpg'
                                    alt="Profile Image"
                                />
                                {/* Profile details */}
                                <div className="text-center mt-2">
                                    <h1 className="text-gray-900 font-bold text-xl leading-8">Jane Doe</h1>
                                    <p className="text-gray-600 font-semibold">Owner at Her Company Inc.</p>
                                    <p className="text-sm text-gray-500 leading-6">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt
                                    </p>
                                </div>
                            </div>
                            {/* Status and member since */}
                            <ul className="text-sm text-gray-600 hover:text-gray-700 py-2 px-3 mt-3 divide-y">
                                <li className="flex items-center py-1">
                                    <span className="font-semibold">Status:</span>
                                    <span className="ml-auto">
                                        <span className="bg-green-500 py-1 px-2 rounded text-white">Active</span>
                                    </span>
                                </li>
                                <li className="flex items-center py-1">
                                    <span className="font-semibold">Member since:</span>
                                    <span className="ml-auto">Nov 07, 2016</span>
                                </li>
                            </ul>
                            {/* Edit Profile button */}
                            <div className="text-center mt-4">
                                <Link to={'/editProfile'} className="block bg-gray-100 hover:bg-gray-200 text-red-900 py-2 px-4 rounded-lg font-semibold text-sm focus:outline-none focus:shadow-outline">
                                    Edit Profile
                                </Link>
                            </div>
                        </div>
                        {/* End of profile card */}
                    </div>

                    {/* Right Side */}
                    <div className="w-full md:w-9/12 md:mx-2 max-sm:mt-8">
                        {/* Active Courses */}
                        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
                            <div className="flex items-center mb-4">
                                <span className="bg-red-900 text-white py-1 px-3 rounded-lg text-sm font-semibold">Active Courses</span>
                            </div>
                            {/* List of active courses */}
                            <ul className="space-y-3">
                                <li className="flex justify-between py-2 border-b border-gray-200">
                                    <div className="text-lg font-semibold text-gray-900">Course Title 1</div>
                                    <div className="text-sm text-gray-600">Instructor: John Doe</div>
                                </li>
                                <li className="flex justify-between py-2 border-b border-gray-200">
                                    <div className="text-lg font-semibold text-gray-900">Course Title 2</div>
                                    <div className="text-sm text-gray-600">Instructor: Jane Doe</div>
                                </li>
                                {/* Add more active courses as needed */}
                            </ul>
                        </div>
                        {/* End of Active Courses */}

                        {/* User Information */}
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <div className="flex items-center mb-4">
                                <span className="bg-red-900 text-white py-1 px-3 rounded-lg text-sm font-semibold">User Information</span>
                            </div>
                            {/* User details */}
                            <div className="text-gray-700">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <span className="font-semibold">First Name:</span> Jane
                                    </div>
                                    <div>
                                        <span className="font-semibold">Last Name:</span> Doe
                                    </div>
                                    <div>
                                        <span className="font-semibold">Email:</span> <a href="mailto:jane@example.com" className="text-blue-800">jane@example.com</a>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Phone Number:</span> +11 998001001
                                    </div>
                                    <div className="col-span-2">
                                        <span className="font-semibold">Address:</span> Beech Creek, PA, Pennsylvania
                                    </div>
                                </div>
                            </div>
                            {/* Edit user information button */}
                            <div className="text-center mt-4">
                                <a href="#" className="block bg-gray-100 hover:bg-gray-200 text-red-900 py-2 px-4 rounded-lg font-semibold text-sm focus:outline-none focus:shadow-outline">
                                    Edit User Information
                                </a>
                            </div>
                        </div>
                        {/* End of User Information */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
