import React from 'react'
import './Home.css'
import hero1 from '../../assets/images/home1.jpeg'
import hero2 from '../../assets/images/hero2.jpg'
import hero3 from '../../assets/images/home3.jpg'
import arrow from '../../assets/images/icons8-arrow-24.png'

const Home = () => {
  return (
    <header>
       <div className='home'>
       <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={hero1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={hero2}class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={hero3} class="d-block w-100" alt="..."/>
    </div>
    <div className='box'>
      <div className='home-text container'>
        <h1>We ensure better education for <br></br> the better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences<br></br>
          needed to excel in the dynamic field of education.
        </p>
        <div className='btn'>Explore Now<img src={arrow} alt='arrow-icon'/></div>
      </div>
    </div>
    </div>
  </div>
  </div>
    </header>
  )
}

export default Home
