import React from 'react'
import "./Projects.css";
import img1 from "../../img/musicapp.png"
import img2 from "../../img/ecommerce.png"
import img3 from "../../img/sidebar.png"
import img4 from "../../img/fest.png"
import img5 from "../../img/tindog.png"
import img6 from "../../img/drum.png"
import img7 from "../../img/Quiz.png"
import img8 from "../../img/jarvis.png"
import img9 from "../../img/pong.png"
const Projects = () => {
  return (
    <div className='Projects' id='Portfolio'>
        <h1 align="center" >Projects</h1>
        <div className='row'>
            <div className='col-sm-4' >
                <div className='card' style={{height:"400px",width:"400px"}}>
                    <img className="card-img-top text-center" src={img4}></img>
                    <div className='card-body'>
                        <p className='card-text'> My Project </p>
                        <div className='btn-group'>
                           <a href="https://github.com/vigneshk-github/Fest.github.io"><button className='btn'>Git-Hub</button></a>
                        <a href="https://loquacious-conkies-201e3c.netlify.app/"> <button className='btn'>Live Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-sm-4' >
                <div className='card' style={{height:"400px",width:"400px"}}>
                <img className="card-img-top text-center" src={img5}></img>
                    <div className='card-body'>
                        <p className='card-text'> My Project </p>
                        <div className='btn-group'>
                            <a href="https://github.com/vigneshk-github/TinDogClone.github.io"><button className='btn'>Git-Hub</button></a>
                        <a href="https://shimmering-khapse-692a8f.netlify.app"> <button className='btn'>Live Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-sm-4' >
                <div className='card' style={{height:"400px",width:"400px"}}>
                    <img className="card-img-top text-center" src={img6}></img>
                    <div className='card-body'>
                        <p className='card-text'> My Project </p>
                        <div className='btn-group'>
                            <a href="https://github.com/vigneshk-github/Drum.github.io"><button className='btn'>Git-Hub</button></a>
                        <a href="https://candid-lamington-601491.netlify.app"> <button className='btn'>Live Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-4' >
                <div className='card' style={{height:"400px",width:"400px"}}>
                    <img className="card-img-top text-center" src={img7}></img>
                    <div className='card-body'>
                        <p className='card-text'> My Project </p>
                        <div className='btn-group'>
                            <a href="https://github.com/vigneshk-github/quiz.github.io"><button className='btn'>Git-Hub</button></a>
                        {/* <a href=""> <button className='btn'>Live Demo</button></a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-sm-4' >
                <div className='card' style={{height:"400px",width:"400px"}}>
                <img className="card-img-top text-center" src={img8}></img>
                    <div className='card-body'>
                        <p className='card-text'> My Project </p>
                        <div className='btn-group'>
                            <a href="https://github.com/vigneshk-github/jarvis.githug.io"><button className='btn'>Git-Hub</button></a>
                        {/* <a href=""> <button className='btn'>Live Demo</button></a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-sm-4' >
                <div className='card' style={{height:"400px",width:"400px"}}>
                    <img className="card-img-top text-center" style={{height:"200px"}}src={img9}></img>
                    <div className='card-body'>
                        <p className='card-text'> My Project </p>
                        <div className='btn-group'>
                            <a href="https://github.com/vigneshk-github/ponggame.github.io"><button className='btn'>Git-Hub</button></a>
                        {/* <a href=""> <button className='btn'>Live Demo</button></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects