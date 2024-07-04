import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa"; // Importing star icons
import { useSelector } from "react-redux";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";


const courses = [
  {
    id: 1,
    title: "React Basics",
    category: "React",
    price: 49.99,
    date: "2024-05-01",
    pic: "https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846574/download_1_tqjmbq.png",
    instructor: "John Doe",
    description: "Learn the basics of React in this comprehensive course.",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Advanced React",
    category: "React",
    price: 99.99,
    date: "2024-03-12",
    pic: "https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846920/advancereact_polyvq.jpg",
    instructor: "Jane Smith",
    description:
      "Take your React skills to next level with advanced course.",
    rating: 4.8,
  },
  {
    id: 3,
    title: "JavaScript Basics",
    category: "JavaScript",
    price: 29.99,
    date: "2023-06-11",
    pic: "https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846573/javascriptimage_t2rwp1.png",
    instructor: "Alex Johnson",
    description:
      "Master  of JavaScript with hands-on examples.",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Node.js Fundamentals",
    category: "Node.js",
    price: 59.99,
    date: "2023-04-01",
    pic: "https://th.bing.com/th/id/OIP.M1U-BOiIzjE8ERoPA2GqpQHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    instructor: "Emily Brown",
    description:
      "Learn scalable web applications using Node.js.",
    rating: 4.9,
  },
  {
    id: 5,
    title: "Tailwind CSS",
    category: "CSS",
    price: 19.99,
    date: "2023-01-10",
    pic: "https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846203/tailwindimage_erefez.jpg",
    instructor: "David Wilson",
    description:
      "Understand the Flexbox layout for modern web design.",
    rating: 4.6,
  },
];


const CourseComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedDate, setSelectedDate] = useState("All");
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);


  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;


  // Calculate total number of pages
  const totalPages = Math.ceil(courses.length / coursesPerPage);


  // Get current courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);


  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  const categories = ["All", "React", "Node.js", "CSS", "JavaScript" ];
  const priceRanges = ["All", "Under Rs 50", "Rs 50 - Rs 100", "Above Rs 100"];
  const dates = ["All", "Last 30 Days", "Last 6 Months", "Last Year"];


  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };


  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };


  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };


  const handleCourseClick = (id) => {
    navigate(`/Cdetail/${id}`);
  };


  const filterByPrice = (course) => {
    switch (selectedPrice) {
      case "Under Rs 50":
        return course.price < 50;
      case "Rs 50 - Rs 100":
        return course.price >= 50 && course.price <= 100;
      case "Above Rs 100":
        return course.price > 100;
      default:
        return true;
    }
  };


  const filterByDate = (course) => {
    const currentDate = new Date();
    const courseDate = new Date(course.date);
    switch (selectedDate) {
      case "Last 30 Days":
        return (currentDate - courseDate) / (1000 * 60 * 60 * 24) <= 30;
      case "Last 6 Months":
        return (currentDate - courseDate) / (1000 * 60 * 60 * 24) <= 180;
      case "Last Year":
        return (currentDate - courseDate) / (1000 * 60 * 60 * 24) <= 365;
      default:
        return true;
    }
  };


  const filteredCourses = courses.filter((course) => {
    return (
      (selectedCategory === "All" || course.category === selectedCategory) &&
      filterByPrice(course) &&
      filterByDate(course)
    );
  });


  useEffect(() => {
    const card = document.querySelectorAll(".card");
    card.forEach((eachCard) => {
      eachCard.addEventListener("mousemove", (e) => {
        const rect = eachCard.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top; // y position within the element.


        const centerX = rect.width / 2;
        const centerY = rect.height / 2;


        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((x - centerX) / centerX) * -5;


        eachCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });


    return () => {
      card.forEach((eachCard) => {
        eachCard.addEventListener("mouseleave", () => {
          eachCard.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";
        });
      });
    };
  }, []);


  return (
    <CoursePage>
      <div className="container mx-auto md:p-4 pt-0">
        <div className="text-center md:mb-4">
          <h1
            style={{ fontFamily: "Futura-bold" }}
            className="text-5xl sm:text-8xl font-bold text-gray-800 card border-0 mb-10"
          >
            Courses
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-around items-center mb-6 gap-y-8 sm:gap-0 max-md:mt-16">
          <div className="flex flex-wrap gap-2 sm:mb-0 justify-center sm:justify-start sm:max-lg:max-w-sm ">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-4 py-1 border-1 border-rose-500 rounded-2xl transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-red text-gray-800 hover:bg-red-600 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>


          <div className="flex flex-wrap gap-2 sm:max-lg:-mt-16 lg:-mt-6 min-w-80 max-lg:-mr-8">
            <div className="flex flex-col items-start ">
              <label htmlFor="priceRange" className="mb-1 text-gray-700">
                Price Range
              </label>
              <select
                id="priceRange"
                onChange={handlePriceChange}
                className="p-2 border-1 border-rose-500 rounded-lg bg-white text-gray-800"
              >
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start ">
              <label htmlFor="dateRange" className="mb-1 text-gray-700">
                Date
              </label>
              <select
                id="dateRange"
                onChange={handleDateChange}
                className="p-2  rounded-lg border-1 border-rose-500 bg-white text-gray-800"
              >
                {dates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>


        <div className="container mx-auto">
          <div className="px-4.5 py-4.5 flex justify-center">
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3   max-w-5xl w-ful gap-5">
              {/* <label>Categories by Dater</label> */}
              {currentCourses.map((course) => (
                <>
                  <div className="card-container min-w-72">
                    <div
                      key={course.id}
                      className="bg-white card border p-3.5 cursor-pointer rounded-lg shadow-lg text-black transition-transform transform hover:scale-105"
                      onClick={() => handleCourseClick(course.id)}
                    >
                      <div className="w-full h-48 mb-2 overflow-hidden rounded-lg">
                        <img
                          src={course.pic}
                          alt={course.title}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </div>
                      {/* content */}
                      <div>


            <div className="max-w-64 sm:max-w-80 py-1 sm:py-2 ">
              <button className="bg-[#2495D6] text-white py-0.5 sm:py-1 px-3 rounded-md">
                {course.level || "Beginner"}
              </button>
              {/* <p className="text-[#2495D6] text-sm sm:text-base my-2 sm:my-2.5">
                {course.category || ""}
              </p> */}
              <p className="font-bold text-base sm:text-xl">
                {course.title || ""}
              </p>
              <p className="text-sm sm:text-sm font-semibold my-1 sm:my-2.5">
                {course.description || ""}
              </p>
            </div>
            <div className="flex bg-gray-900 text-white justify-between px-2 sm:px-4 py-1.5 rounded-md text-md">
              <span>Instructor</span>
              <span>{course.instructor || ""}</span>
            </div>
            <div className="flex justify-between font-semibold py-1">
              <div>
                <p className="mb-2 text-base sm:text-md">Price Value</p>
                <div className="flex">
                  {Array.from({ length: course.rating }).map((_, index) => (
                    <FaStar key={index} color="#ffa41c" className="text-lg sm:text-md" />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p className="mb-2 text-base font-bold sm:text-md">
                  {course.price ? `${course.price} Rs` : ""}
                </p>
                {
                  !user ? <button className="text-white bg-red-700 text-sm sm:text-md py-1 px-3 rounded-xl">
                  Add to cart
                </button> : ''
                }
              </div>
              </div>
            </div>
            {/* <div className="px-2 sm:px-4 py-1.5 text-gray-600">
              <p>Date: {course.date ? new Date(course.date).toLocaleDateString() : ""}</p>
            </div> */}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div>
  <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
    {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
    <div className="w-full max-w-screen-xl flex items-center justify-between border-t border-gray-200">
      <div onClick={previousPage} disabled={currentPage === 1} className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
        <span><FaArrowLeftLong/></span>
        <p className="text-xl ml-3 font-medium leading-none ">Previous</p>
      </div>
      <div className="sm:flex hidden">
      {Array.from({ length: totalPages }, (_, index) => (
           <p className="text-xl font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2" key={index + 1} onClick={() => paginate(index + 1)}>
           {index + 1}
         </p>
         ))}
        {/* <p className="text-xl font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
          1
        </p>
        <p className="text-xl font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
          2
        </p>
        <p className="text-xl font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
          3
        </p>
        <p className="text-xl font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">
          4
        </p>
        <p className="text-xl font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
          5
        </p>
        <p className="text-xl font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
          6
        </p>
        <p className="text-xl font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
          7
        </p>
        <p className="text-xl font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
          8
        </p> */}
      </div>
      <div onClick={nextPage} disabled={currentPage === totalPages} className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
        <p className="text-xl font-medium leading-none mr-3">Next</p>
        <span><FaArrowRightLong />        </span>
      </div>
    </div>
  </div>


        </div>
      </div>
    </CoursePage>
  );
};


export default CourseComponent;
const CoursePage = styled.div`
  .card-container {
    perspective: 1000px;
  }
  .course-container {
    height: 70vh;
  }
`;





