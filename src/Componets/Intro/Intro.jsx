import React from 'react'
import "./intro.css"
import Github from "../../img/github.png"
import LinkedIN from "../../img/linkedin.png"
import Insta from "../../img/instagram.png"
import color1 from "../../img/Vector1.png"
import color2 from "../../img/Vector2.png"
import vk from "../../img/pngegg.png"
import crown from "../../img/crown.png"
import Floatingdiv from '../FloatingDiv/Floatingdiv'
import emoji1 from "../../img/glassesimoji.png"
import emoji2 from "../../img/thumbup.png"
import {motion} from "framer-motion"
import {Link} from "react-scroll"
import img4 from "../../img/vignesh1.png"

const Intro = () =>{

  const transition = {duration:2, type:"spring"}

  return (
    <div className='Intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span>Hey! I am  </span>
          <span>Vignesh</span>
          <span>I am Full Stack Web Developer </span>
        </div>
        <Link spy={true} to='ContactUs' smooth={true} activeClass="activeClass">
           <button className='button i-button'>
          Hire Me
        </button>             
        </Link>
        <div className='Images'>
          <a href='https://github.com/vigneshk-github'><img src={Github}></img></a>
          <a href='https://www.instagram.com/_iam_vk18/'><img src={Insta}></img></a>
          <a href='https://www.linkedin.com/in/vignesh-kamatam-a1ba7120a'><img src={LinkedIN}></img></a>
        </div>
      </div>
      <div className='i-right'>
        <img src={color1}></img>
        <img src={color2}></img>
        <img className='vk' src={img4}></img>
        <motion.img 
        initial={{left:"-36%"}}
        whileInView={{left:"-24%"}}
        transition={transition}
        style={{transform: "scale(0.5)", left:"-10%"}} src={emoji1}/>
        <motion.div 
        initial={{top:"-4%",left:"74%"}}
        whileInView={{left:"68%"}}
        transition={transition}
        style={{top:"-4%",left:"68%"}}>
          <Floatingdiv image={crown} txt1="Web" txt2="Development"/>
        </motion.div>
        <motion.div
        initial={{top:"19rem",left:"8rem"}}
        whileInView={{left:"0rem"}}
        transition={transition}
         style={{top:"18rem",left:"0rem"}}>
            <Floatingdiv image={emoji2} txt1="Python" txt2="Development"/>
        </motion.div>
        <div className='Blur' ></div>
        <div className='Blur' style={{background:"#C1F5FF",top:"17rem",height:"15rem",width:"19rem",left:"-1rem"}}></div>
      </div>
    </div>
  )
}

export default Intro