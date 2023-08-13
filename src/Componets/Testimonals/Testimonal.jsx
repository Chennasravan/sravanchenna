import React from 'react'
import "./Testimonal.css"
import img1 from "../../img/jaffer3.png"
import img2 from "../../img/naveen3.png"
import img3 from "../../img/saicharan1.png"
import { UilArrowRight } from '@iconscout/react-unicons'
import { UilArrowLeft } from '@iconscout/react-unicons'
const Testimonal = () => {
  return (
    <div className='Testimonl' id='Testimonals'>
    <h1 align="center">Testimonal</h1>
      <div className='row testimonal'>
        <div className='col-md-12'>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
              <div class="carousel-item active">
                <div className='row testo'>
                  <div className='col-m-4'>
                      <div className='single-box'>
                          <div className='img-area'><img class="d-block w-100" src={img1} alt="First slide"/></div>
                          <div className="img-text">
                              <h4 className='test-test1'>Nadeem Jaffer</h4>
                              <p className='test-test'>
                              I was looking for a Web 
                              <br/>
                              professional who would create 
                              <br/>
                              and evolve my website
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className='col-m-4'>
                      <div className='single-box'>
                          <div className='img-area'><img class="d-block w-100" src={img2} alt="First slide"/></div>
                          <div className="img-text">
                              <h4>Naveen Raj</h4>
                              <p className='test-test'>
                              Always available to help
                              <br/>
                               , incredibly proficient, hits 
                               <br/>
                                deadlines without fail.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className='col-m-4'>
                      <div className='single-box'>
                          <div className='img-area'><img class="d-block w-100" src={img3} alt="First slide"/></div>
                          <div className="img-text">
                              <h4>Sai Charan</h4>
                              <p className='test-test'>
                                Vignesh really does stand 
                                <br/>
                                 out among the web developers 
                                <br/>
                                 that are around today. 
                              </p>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              {/* <div class="carousel-item">
                <div className='row testo'>
                  <div className='col-m-4'>
                      <div className='single-box'>
                          <div className='img-area'><img class="d-block w-100" src={img1} alt="First slide"/></div>
                          <div className="img-text">
                              <h4>Sravan</h4>
                              <p className='test-test'>
                              I've been using Vignesh’s services
                              <br/>
                               for about 1 years and on multiple
                               <br/>
                                projects. He’s my “go to” guy.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className='col-m-4'>
                      <div className='single-box'>
                          <div className='img-area'><img class="d-block w-100" src={img1} alt="First slide"/></div>
                          <div className="img-text">
                              <h4>Revath</h4>
                              <p className='test-test'>
                                I can’t say enough about the 
                                <br/>
                                 professionalism, attention
                                 <br/>
                                 and vast technical knowledge 
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className='col-m-4'>
                      <div className='single-box'>
                          <div className='img-area'><img class="d-block w-100" src={img1} alt="First slide"/></div>
                          <div className="img-text">
                              <h4>Anil</h4>
                              <p className='test-test'>
                                Vignesh was recommended to 
                                <br/> 
                                me by a mutual friend .
                                <br/> 
                                And never disappointed Me 
                              </p>
                          </div>
                      </div>
                  </div>
                </div>
              </div> */}
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                <UilArrowLeft style={{color:"#000000",transform:"scale(2.5)"}}/>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                <UilArrowRight style={{color:"#000000",transform:"scale(2.5)"}}/>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonal