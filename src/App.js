import react from 'react'
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
//Home components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Footer from './components/Footer';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import SignIn from './components/LoginSignUp/SignIn';
import AdminLogin from './components/LoginSignUp/AdminLogin';
import SellerNavBar from './components/SellerComponents/SellerNavBar';
import Header from './components/AdminComponents/Header';
import SideBar from './components/AdminComponents/SideBar';
//admin components
import AdminLayout from './components/AdminComponents/AdminLayout';
import AdminDashboard from './components/AdminComponents/AdminDashboard';
import Sellers from './components/AdminComponents/Sellers';
import Customers from './components/AdminComponents/Customers';
import ManageStocks from './components/AdminComponents/ManageStocks';


function App() {

  const Home = () => {
    return (
      <div>
        <NavBar />
        <Hero />
        <Intro />
        <Footer />
      </div>
    )
  }
  const SellerHome = () => {
    return (
      <div>
        <SellerNavBar />
      </div>
    )
  }


  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/login' element = {<LoginSignUp />} />
          <Route path = '/signin' element = {<SignIn />} />
          <Route path = '/adminlogin' element = {<AdminLogin />} />
          <Route path = '/sellerhome' element = {<SellerHome />} />
          <Route path="/adminhome" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="sellers" element={<Sellers />} />
            <Route path="customers" element={<Customers />} />
            <Route path="managestocks" element={<ManageStocks />} />
          </Route>     
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
