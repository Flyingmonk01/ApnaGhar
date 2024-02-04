import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import About from './components/About/About';
import Properties from './components/Properties/Properties';
import Footer from './components/Footer/Footer';
import Buy from './components/Buy/Buy';
import Rent from './components/Rent/Rent';
import Users from './components/Profile/Profile';


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
          <Route path='/property' element={<Properties />} />
          <Route path='/rent' element={<Rent />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/profile' element={<Users />} />
        </Routes>
        <Footer />
      </Router >
  )
}

export default App;
