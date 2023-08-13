import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
        <footer className='page-footer font-small cyan darken-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 py-4'>
                        <div className='flex-center'>
                            <a class="li-ic" href='https://www.linkedin.com/in/vignesh-kamatam-a1ba7120a'>
                            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="ins-ic" href='https://www.instagram.com/_iam_vk18/'>
                            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="tw-ic" href='https://twitter.com/thisisVignesh18'>
                            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="fb-ic" href='https://www.facebook.com/profile.php?id=100012368224887'>
                            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3">© 2023 Copyright : Vignesh K
  </div>
        </footer>
    </div>
  )
}

export default Footer