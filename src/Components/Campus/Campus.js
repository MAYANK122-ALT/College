import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/images/Aboutimg.jpg'
import gallery_2 from '../../assets/images/cp2.jpg'
import gallery_3 from '../../assets/images/cp3.jpg'
import gallery_4 from '../../assets/images/cp4.jfif'
import gallery_5 from '../../assets/images/cp5.jpg'
import gallery_6 from '../../assets/images/cp6.jpg'

const Campus = () => {
  return (
    <section>
         <div id="carouselExampleFade" className="carousel slide carousel-fade campus">
        <div className='container2 bg-color'>
  <div className="carousel-inner">
    <div className="carousel-item image active">
      <img src={gallery_1} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item image">
      <img src={gallery_2} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item image">
      <img src={gallery_3} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item image">
      <img src={gallery_4} className="d-block size" alt="..."/>
    </div>
    <div className="carousel-item image">
      <img src={gallery_5} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item image">
      <img src={gallery_6} className="d-block" alt="..."/>
    </div>
  </div>
  </div>
  <button className="carousel-control-prev color" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next color" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </section>
  )
}

export default Campus
