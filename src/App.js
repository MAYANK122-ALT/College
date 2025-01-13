import './App.css';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Program from './Components/Programs/Program';
import Testimonial from './Components/Testimonials/Testimonial';
import Title from './Components/Title/Title';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <div className='container'>
    <Title title='PROGRAMS' subtitle='What We Offer'/>
    <Program/>
    <About/>
    <Title title='GALLERY' subtitle='Campus Photos'/>
    <Campus/>
    <Title title='TESTIMONIALS' subtitle='What Students Say'/>
    <Testimonial/>
    <Title title='CONTACT' subtitle='Get In Touch'/>
    <Contact/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
