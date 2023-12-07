import react from 'react'
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
//Home components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Footer from './components/Footer';
//Login components
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import SignUp from './components/LoginSignUp/SignUp';
import AdminLogin from './components/LoginSignUp/AdminLogin';
//admin components
import AdminLayout from './components/AdminComponents/AdminLayout';
import AdminDashboard from './components/AdminComponents/AdminDashboard';
import Sellers from './components/AdminComponents/Sellers';
import Customers from './components/AdminComponents/Customers';
import ManageStocks from './components/AdminComponents/ManageStocks';
import AdminNotifications from './components/AdminComponents/AdminNotifications';
import AdminMessages from './components/AdminComponents/AdminMessages';
import AddSellerStocks from './components/AdminComponents/AddSellerStocks';
//seller components
import SellerLayout from './components/SellerComponents/SellerLayout';
import SellerDashboard from './components/SellerComponents/SellerDashboard';
import Orders from './components/SellerComponents/Orders';
import SellerNotifications from './components/SellerComponents/SellerNotifications';
import SellerMessages from './components/SellerComponents/SellerMessages';
import SellerAccount from './components/SellerComponents/SellerAccount';
import RequestStocks from './components/SellerComponents/RequestStocks';
import Complaints from './components/SellerComponents/Complaints';
//customer components
import CustomerLayout from './components/CustomerComponents/CustomerLayout';
import CustomerDashboard from './components/CustomerComponents/CustomerDashboard';
import PlaceOrder from './components/CustomerComponents/PlaceOrder';
import OrderStatus from './components/CustomerComponents/OrderStatus';
import MakeComplaint from './components/CustomerComponents/MakeComplaint';
import CustomerNotifications from './components/CustomerComponents/CustomerNotifications';
import CustomerMessages from './components/CustomerComponents/CustomerMessages';
import CustomerAccount from './components/CustomerComponents/CustomerAcc'
import PlaceOrderHere from './components/CustomerComponents/PlaceOrderHere';

function App() {

  let isAuthenticated = false;


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


  return ( 
    <div> 
      <Router>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/login' element = {<LoginSignUp />} />
          <Route path = '/signup' element = {<SignUp />} />
          <Route path = '/adminlogin' element = {<AdminLogin />} />

          <Route path="/adminhome" element={<AdminLayout />}> 
            <Route index element={<AdminDashboard />} />
            <Route path="sellers" element={<Sellers />} />
            <Route path="customers" element={<Customers />} />
            <Route path="managestocks" element={<ManageStocks />} />
          </Route> 
          <Route path="adminnotifications" element={<AdminNotifications />} />    
          <Route path="adminmessages" element={<AdminMessages />} /> 
          <Route path="/addsellerstocks" element={<AddSellerStocks />}
          />

          <Route path="/sellerhome" element = {<SellerLayout />} >
            <Route index element={<SellerDashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="requeststocks" element={<RequestStocks />} />
            <Route path="complaints" element={<Complaints />} />
          </Route>
          <Route path="sellernotifications" element={<SellerNotifications />} />    
          <Route path="sellermessages" element={<SellerMessages />} /> 
          <Route path="selleraccount" element={<SellerAccount />} /> 

          <Route path="/customerhome" element = {<CustomerLayout />} >
            <Route index element={<CustomerDashboard />} />
            <Route path="placeorder" element={<PlaceOrder />} />
            <Route path="orderstatus" element={<OrderStatus />} />
            <Route path="makecomplaint" element={<MakeComplaint />} />
          </Route>
          <Route path="customernotifications" element={<CustomerNotifications />} />    
          <Route path="customermessages" element={<CustomerMessages />} /> 
          <Route path="customeraccount" element={<CustomerAccount />} />
          <Route path="/placeorderhere" element={<PlaceOrderHere />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
