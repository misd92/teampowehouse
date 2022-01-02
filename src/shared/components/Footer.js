import React from 'react';
import {Link} from 'react-router-dom';



function Footer(){
    return(
        <footer className="py-11 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 text-center"> 
              <a className="footer-logo text-white h2 mb-3" href="/"> 
                <h3>TEAM POWER HOUSE</h3>
              </a>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className="la la-facebook"></i></a> </li>
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className="la la-dribbble"></i></a> </li>
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className="la la-instagram"></i></a> </li>
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className="la la-twitter"></i></a> </li>
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className="la la-linkedin"></i></a> </li>
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className=" lab la-pinterest-p"></i></a> </li>
              </ul>
            </div>
         </div>
          <div className="row pt-9">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="d-flex footer-box">
                <div className="mr-4"> <i className="las la-map-marker-alt icon-img ic-2x"></i> </div>
                <div>
                  <h6 className="mb-1 text-white font-w-5">Location</h6>
                  <p className="mb-0 font-w-4 text-muted">Mohamed Bunder, Thiruvaiyaru 
                   Thanjavur, Tamil Nadu - 613201, INDIA</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="d-flex footer-box">
                <div className="mr-4"> <i className="las la-envelope icon-img ic-2x"></i> </div>
                <div>
                  <h6 className="mb-1 text-white font-w-5">Email us</h6>
                  <a className="text-muted font-w-4" href="mailto:themeht23@gmail.com">misd.bunder@gmail.com</a><br></br>
                  <a className="text-muted font-w-4" href="mailto:themeht23@gmail.com">mohamedfayaz21@gmail.com</a> </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-md-3 mt-lg-0">
              <div className="d-flex footer-box">
                <div className="mr-4"> <i className="las la-mobile icon-img ic-2x"></i> </div>
                <div>
                  <h6 className="mb-1 text-white font-w-5">Support Service</h6>
                  <p className="mb-0 font-w-4 text-muted">Call on 
                    +91 8220460294 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-muted align-items-center pt-9">
            <div className="col-md-12 font-w-4 text-center"><small>Copyright ©{new Date().getFullYear()} . All Rights Reserved.</small> </div>
          </div>
        </div>
      </footer>
      
    );
}


export default Footer;