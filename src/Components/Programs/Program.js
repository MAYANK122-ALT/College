import React from 'react'
import './Program.css'
import program1 from '../../assets/images/program1.jfif'
import program2 from '../../assets/images/program2.jpg'
import program3 from '../../assets/images/program3.jfif'
import program_icon_1 from '../../assets/images/diploma.png'
import program_icon_2 from '../../assets/images/graduation.png'
import program_icon_3 from '../../assets/images/masters.png'

const Program = () => {
  return (
    <section>
        <div className='programs'>
        <div className='program'>
            <img src={program1} alt='programs-images'/>
            <div className='caption'>
              <img src={program_icon_1} alt='program-icon'/>
              <p>Diploma</p>
            </div>
        </div>
        <div className='program'>
            <img src={program2} alt='programs-images'/>
            <div className='caption'>
              <img src={program_icon_2} alt='program-icon'/>
              <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program size2'>
            <img src={program3} alt='programs-images'/>
            <div className='caption'>
              <img src={program_icon_3} alt='program-icon'/>
              <p>Masters Degree</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Program
