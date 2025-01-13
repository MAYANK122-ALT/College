import React from 'react'
import './About.css'
import About_img from '../../assets/images/Aboutimg.jpg'

const About = () => {
  return (
    <section>
       <div className='about'>
                <div className='about-left'>
                    <img src={About_img} alt='about-image' className='about-img' />
                </div>

                <div className='about-right'>
                    <h3>ABOUT UNIVERSITY</h3>
                    <h2>Nurturing Tomorrow's Leaders Today </h2>
                    <p>Welcome to XYZ University, a vibrant hub of academic excellence, innovation, and community. Since our founding, we have been dedicated to empowering students to reach their full potential, both academically and personally. Our university stands out for its commitment to fostering a diverse, inclusive, and supportive environment where students from all backgrounds can thrive.</p>
                    <p>At XYZ University, we offer a wide range of undergraduate, graduate, and professional programs, taught by distinguished faculty members who are leaders in their fields. Our state-of-the-art facilities, cutting-edge research opportunities, and strong industry partnerships ensure that our students receive a well-rounded education that prepares them for the challenges of the modern world.</p>
                    {/* <p>Beyond academics, our university is a place where lifelong friendships are forged, leadership skills are nurtured, and passions are discovered. With a vibrant campus life, a host of student organizations, and numerous opportunities for community engagement, we are committed to making your journey here both enriching and unforgettable.</p> */}
                </div>
            </div>
    </section>
  )
}

export default About
