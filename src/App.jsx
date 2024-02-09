import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import About from './components/About/About';
import Property from './components/Property/Property';
import Footer from './components/Footer/Footer'
import Payment from './components/Payment/Payment';


function App() {

    return(
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/signup' element = {<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/Property' element={<Property/>} />
          <Route path='/Payment' element={<Payment/>}/>
        </Routes>
        <Footer/>
      </Router >
  )
}

export default App;
