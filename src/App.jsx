import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import About from './components/About/About';
import Payment from './components/Payment/Payment';
import Rent from './components/Rent/Rent';
import Buy from './components/Buy/Buy';
import Footer from './components/Footer/Footer';
import Users from './components/User/User';
import Property from './components/Property/Property';
import PeoplePage from './components/PeoplePage/PeoplePage';
import NotFound from './components/NotFound/NotFound';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import People from './components/People/People';


function App() {

    return(
      <Router >
        <Navbar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/signup' element = {<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/property' element={<Property/>} />
          <Route path='/property/:id' element={<PropertyDetails />} />
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/rent' element={<Rent />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/user/:id' element={<Users />} />
          <Route path='/people' element={<People />} />
          <Route path='/people/:id' element={<PeoplePage />} />
        </Routes>
        <Footer/>
      </Router >
  )
}

export default App;