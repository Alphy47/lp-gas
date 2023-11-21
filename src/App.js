import react from 'react'
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Footer from './components/Footer';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import SignIn from './components/LoginSignUp/SignIn';

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

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/login' element = {<LoginSignUp />} />
          <Route path = '/signin' element = {<SignIn />} />
          
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
