import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import img1 from "../../img/email.png"
import img2 from "../../img/whatsapp.png"
import img3 from "../../img/link1.png"
import { UilArrowRight } from '@iconscout/react-unicons'


const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g20tpd9', 'template_aofz6l6', form.current, '9PGmJIUO3qckc9tGr')
      e.target.reset()
  };

  return (
    <div className='contact' id="ContactUs">
    <h1 align="center">Contact</h1>
        <div className='Contact'>
        <div className='left-side'>
            <span className='text'>Talk to Me</span>
            <div className='box'>
                <img src={img1} className="image"></img>
                <span>Email</span>
                <span>vigneshten@gmail.com</span>
                <span>Write Me<UilArrowRight/></span>
            </div>
            <div className='box'>
                <img src={img2} className="image"></img>
                <span>Whats Up</span>
                <span>6304375629</span>
                <span>Write me<UilArrowRight/></span>
            </div>
            <div className='box'>
                <img src={img3} className="image"></img>
                <span>LinkedIn</span>
                <span>Vignesh Kamatam</span>
                <span>Write me<UilArrowRight/></span>
            </div>
        </div>
        <div className='right-side'>
            <span className='text'>Write to me</span>
            <form ref={form} className='form1' onSubmit={sendEmail}>
                <div className='contact_form'>
                    <label>Name</label>
                    <input type="text" name="name" className="input1" placeholder='Insert Your Name'></input>
                </div>
                <div className='contact_form'>
                    <label>Mail</label>
                    <input type="email" name='email' className="input1" placeholder='Insert Your Email'></input>
                </div>
                <div className='contact_form'>
                    <label>Project</label>
                    <textarea  name='project' className="input2" placeholder='Insert Your Message'></textarea>
                </div>
                <button className='button'>Send Me</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact