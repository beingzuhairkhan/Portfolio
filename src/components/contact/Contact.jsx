import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vmfu879', 'template_d5enc98', form.current, 'mQQaS7Y8zQH67Di1P')
        e.target.reset()
  };
  return (
    <div id='contact'>
      <div className='m_container'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
      <div className='contact'>
        <div className='contact_container'>
          <form ref={form} onSubmit={sendEmail}>
        <div className='first_block'>
        <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name'  placeholder='Your Name' required />
        </div>

           <div className='second_block'>
           <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' placeholder='Your Email' required/>
           </div>

           <div className='second_block'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' placeholder='Your Message' rows="10" cols="35" required></textarea>
            </div>
            <button type='submit' className='btn btn-primary button'>Send</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
