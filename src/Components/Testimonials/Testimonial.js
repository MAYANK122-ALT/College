import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.jpg'
import user_2 from '../../assets/images/user-2.jfif'
import user_3 from '../../assets/images/user-3.jpg'
import user_4 from '../../assets/images/user-4.jpg'

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;
    
    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`   
    }

  return (
    <section>
      <div className= 'testimonials'>
        <img src= {next_icon} alt='next-btn'  className= 'next-btn' onClick={slideForward} />
        <img src= {back_icon} alt='back-btn' className='back-btn' onClick={slideBackward}/>
        <div className= 'slider'>
            <ul ref={slider}>

                <li>
                <div className= 'slide1'>
                    <div className= 'user-info'>
                        <img src= {user_1} alt='user-photos' className='user-size'/>
                        <div>
                            <h3>James,</h3>
                            <span>Alumni</span>
                        </div>
                    </div>
                    <p>The diverse and inclusive environment at XYZ University helped me grow both professionally <br></br>and personally. The connections I made here have been invaluable, and I left with lifelong <br></br>friends and mentors.</p>
                </div>
                </li>
                <li>
                <div className= 'slide1'>
                    <div className= 'user-info'>
                        <img src= {user_3} alt='user-photo' className='user-size'/>
                        <div>
                            <h3>Emily,</h3>
                            <span>Class of 2023</span>
                        </div>
                    </div>
                    <p>Attending XYZ University was on eof the best decision I have ever made. The faculty genuinely cared about my success, and the hands-on learning experiences prepared me for my career. I couldn't be more grateful!</p>
                </div>
                </li>
                <li>
                <div className= 'slide1'>
                    <div className= 'user-info'>
                        <img src= {user_2} alt='user-photo' className='user-size'/>
                        <div>
                            <h3>Michael</h3>
                            <span>Computer Science major</span>
                        </div>
                    </div>
                    <p>The opportunitites for hands-on projects and internships were incredible. I was able to apply what I learned in classroom to the real-world situations, which set me apart when I entered the job market.</p>
                </div>
                </li>
                <li>
                <div className= 'slide1'>
                    <div className= 'user-info'>
                        <img src= {user_4} alt='user-photo' className='user-size'/>
                        <div>
                            <h3>Olivia</h3>
                            <span>Current Student</span>
                        </div>
                    </div>
                    <p>The vibrant campus life and the welcoming community at XYZ University made it feel like a second home. I was able to explore my passions, develop leadership skills, and prepare for the real world. </p>
                </div>
                </li>
            </ul>
           
        </div>
      </div>
      
    </section>
  )
}

export default Testimonial
