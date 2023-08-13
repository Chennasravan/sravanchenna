import React from 'react'
import ServicesFloat from '../ServicesFloat/ServicesFloat'
import "./services.css"
import emoji1 from "../../img/glassesimoji.png"
import emoji2 from "../../img/humble.png"
import emoji3 from "../../img/heartemoji.png"
import {motion} from "framer-motion"
import resume from "../../../src/Resume.pdf"

const Services1 = () => {

  const transition = {duration:2, type:"spring"}

  return (
    <div className='services' id='Sevices'>
      <div className='Awesome'>
        <span>My Awesome</span>
        <span>Services</span>
        <spane>
        I am working on both Web Development as 
        <br/>
        well as on the Python Language 
        </spane>
        <a href={resume} download>
        <button className='button'> Download CV</button>
        </a>
      </div>
      <div className='cards'>
        <motion.div 
        initial={{left:"66%"}}
        whileInView={{left:"50%"}}
        transition={transition}
        style={{left:"40%",top:"0%"}}>
          <ServicesFloat txt1={"Raect Js"} txt2={"I am Intermediate at using react Js and Build this website with the help it."} img1={emoji1}/>
        </motion.div>
        <motion.div
        initial={{right:"76%"}}
        whileInView={{left:"20%"}}
        transition={transition}
         style={{left:"10%",top:"40%"}}>
          <ServicesFloat txt1={"MongoDB"} txt2={"I am Able to use Databases for the website like MongoDb, Mongoose etc"} img1={emoji2}/>
        </motion.div>
        <motion.div
        initial={{left:"76%"}}
        whileInView={{left:"60%"}}
        transition={transition}
         style={{left:"55%",top:"70%"}}>
          <ServicesFloat txt1={"OpenAi"} txt2={"Build an Personal Assistant Jarvis using OpenAi and added GUI to it"} img1={emoji3}/>
        </motion.div>
      </div>
    </div>
  )
}

export default Services1