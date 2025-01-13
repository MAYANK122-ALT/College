import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'
import mail_icon from '../../assets/images/mail.png'
import phone_icon from '../../assets/images/phone.png'
import loc_icon from '../../assets/images/location.png'
import white_arrow from '../../assets/images/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "95c324db-c30a-4524-990f-18c4ea3f694b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <section>
        <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message. <img src= {msg_icon} alt='message-icon'/></h3>
            <p>Feel free to reach out through contact form or find our contact information below.</p>
            <ul>
                <li><img src= {mail_icon} alt='mail-icon'/>info@xyzuniversity.com</li>
                <li><img src= {phone_icon} alt='phone-icon'/>+1 123 456 7890</li>
                <li><img src= {loc_icon} alt='address-icon'/>78545 John Forks Suite 061, Lake Clintborough, Georgia, USA</li>
            </ul>
        </div>
        <div className= 'contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your phone number' required/>
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button className='btn3'>Submit Now <img src={white_arrow} alt='arrow-icon'/></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
      
    </section>
  )
}

export default Contact
