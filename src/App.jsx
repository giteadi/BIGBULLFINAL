import { useState } from 'react'
import './App.css'
import Home from './component/home';
import Login from './component/Priyanshu2/login';
import Register from './component/Priyanshu2/register';
import CourseComponent from './component/Aditya/CourseComponent';
import SingleCourse from './component/Aditya/SingleCourse';
import Blogs from './component/Aditya/Blogs';
import About from './component/Aditya/About';
import Test from './component/Aditya/Test';
import Awards from './component/Aditya/Awards';
import {Routes, Route, useLocation } from 'react-router-dom';
import PurchasedCoursesPage from './component/AsthaYadav/purchasedCoursesPage';
import PaymentForm from './component/Nousheen/paymentForm';
import HelpPage from './component/Nousheen/helpPage';
import CourseDetail from './component/Aditya/courseDetail';
import AsthaRegister from './component/AsthaYadav/registration';
import Carousel from './component/Priyanshu2/carousel';
import Cart from './component/Priyanshu2/cart';
import Footer from './component/Priyanshu2/footer';
import UpdateProfile from './component/AsthaYadav/updateProfile';
import Invoice from './component/Aditya/invoice';
import ResetPassword from './component/Nousheen/resetPassword';
import Verification from './component/Nousheen/verification';
import PrivacyPolicy from './component/Nousheen/privacyPolicy';
import RefundPolicy from './component/Nousheen/refundPolicy';
import TermCondition from './component/Nousheen/termAndCondition';
import ContactUs from './component/Priyanshu2/contactUs';
import FAQ from './component/Priyanshu2/faq';
// import EnrollNow from './component/AsthaYadav/enrollNow';
import SinglePost from './component/Aditya/singleBlogPost';
import NotificationPage from './component/Nousheen/notification';
import SubscriptionPlans from './component/Nousheen/subscription';
import Navbar from './component/navbar';
import LatestPage from './component/Nousheen/latestPage';
import EnrollForm from './component/EnrollForm';
// import locomotiveScroll from "locomotive-scroll";
import PageNotFound from './component/pageNotFound';
import ScrollToTop from './component/scrollTop';
import EditProfileComponent from './component/Aditya/editProfile';
import ProfilePage from './component/Aditya/profileDashboard';


function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/'];
  

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
<ScrollToTop>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      {/* <Route path='/Navbar' element={<Navbar/>}/> */}
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/courses' element={<CourseComponent/>}/>
      {/* <Route path="/course/:id" element={<SingleCourse />} /> */}
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/test' element={<Test/>}/> */}
      {/* <Route path='/awards' element={<Awards/>}/> */}
      <Route path='/PurchasedCoursesPage' element={<PurchasedCoursesPage/>}/>
      {/* <Route path='/PurchasedComponent' element={<PurchasedComponent/>}/> */}
      {/* <Route path='/PaymentForm' element={<PaymentForm/>}/> */}
      <Route path='/HelpPage' element={<HelpPage/>}/>
      <Route path='/Cdetail/:id' element={<CourseDetail/>}/>
      {/* <Route path='/AsthaRegister' element={<AsthaRegister/>}/> */}
      {/* <Route path='/Carousel' element={<Carousel/>}/> */}
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Footer' element={<Footer/>}/>
      {/* <Route path='/UpdateProfile' element={<UpdateProfile/>}/> */}
      <Route path='/Invoice' element={<Invoice/>}/>
      <Route path='/ResetPassword' element={<ResetPassword/>}/>
      <Route path='/Verification' element={<Verification/>}/>
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
      <Route path='/RefundPolicy' element={<RefundPolicy/>}/>
      <Route path='/TermCondition' element={<TermCondition/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      {/* <Route path='/FAQ' element={<FAQ/>}/> */}
      {/* <Route path='/EnrollNow' element={<EnrollNow/>}/> */}
      <Route path='/singlepost/:id' element={<SinglePost/>}/>
      <Route path='/NotificationPage' element={<NotificationPage/>}/>
      <Route path='/SubscriptionPlans' element={<SubscriptionPlans/>}/>
      {/* <Route path='/LatestPage' element={<LatestPage/>}/> */}
      <Route path='/EnrollForm' element={<EnrollForm/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/editProfile' element={<EditProfileComponent/>}/>
    </Routes>
      </ScrollToTop>
      <Footer/>
    </>
  )
}

export default App
