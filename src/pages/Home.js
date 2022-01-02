import React, {useState,useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';



function Home(){

    const sponsors = useState([
        {
            id:1,
            img:'//cdn.shopify.com/s/files/1/0020/6539/9861/files/01_160x160@2x.png?v=1542181800'
        },
        {
            id:2,
            img:'//cdn.shopify.com/s/files/1/0020/6539/9861/files/02_160x160@2x.png?v=1542181822'
        },
        {
            id:3,
            img:'//cdn.shopify.com/s/files/1/0020/6539/9861/files/03_160x160@2x.png?v=1542181881'
        },
        {
            id:4,
            img:'//cdn.shopify.com/s/files/1/0020/6539/9861/files/04_160x160@2x.png?v=1542181905'
        },
        {
            id:5,
            img:'//cdn.shopify.com/s/files/1/0020/6539/9861/files/05_160x160@2x.png?v=1542181921'
        },
        {
            id:6,
            img:'//cdn.shopify.com/s/files/1/0020/6539/9861/files/06_160x160@2x.png?v=1542181930'
        }

    ]);
    const aboutRow = useState([
        {
            id:1,
            img:'https://cdn.shopify.com/s/files/1/0020/6539/9861/files/about.jpg',
            title:'ABOUT'
        },{
            id:2,
            img:'https://cdn.shopify.com/s/files/1/0020/6539/9861/files/item.jpg?3765694495744149980',
            title:'EBOOKS'
        },
        {
            id:3,
            img:'https://cdn.shopify.com/s/files/1/0020/6539/9861/files/youtube.jpg?3765694495744149980',
            title:'YOUTUBE'
        }
    ])
    useEffect(() => {

        console.log(sponsors);
        let x = document.getElementsByClassName('bg-carousel');
        for (let i = 0; i < x.length; i++) {
            x[i].style.backgroundImage = 'url(' + x[i].attributes.getNamedItem("data-bg-img").value + ')';
        }
    }, [])

    return (
        <>
            <section className="banner-bg-full pos-r p-0">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <OwlCarousel className="banner-slider owl-theme no-pb owl-2" items={1}
                                animateIn={'fadeIn'} animateOut={'fadeOut'} autoplay
                                autoplayTimeout={6000} dots={false} loop nav={false}>
                                <div className="item bg-carousel" data-bg-img="/assets/images/1E2A0075_Original.jpg">
                                    <div className="container h-100">
                                        <div className="row h-100 align-items-center">
                                            {/* <div className="col-lg-12 col-md-12 custom-py-3 custom-pb-2 position-relative z-index-1 px-lg-10 text-center">
                                                <h6 className="font-w-6 text-white animated3">New promotions!</h6>
                                                <h1 className="mb-4 animated3 text-white">Simply Delicious</h1>
                                                <h5 className="animated3">We supply highly quality organic products</h5>
                                                <div className="animated3">
                                                    <a className="btn btn-dark" href="#">Shop Now</a>
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                                <div className="item bg-carousel" data-bg-img="/assets/images/1E2A0075_Original.jpg">
                                    <div className="container h-100">
                                        <div className="row h-100 align-items-center">
                                            {/* <div className="col-lg-12 col-md-12 custom-py-3 custom-pb-2 position-relative z-index-1 px-lg-10 text-center">
                                                <h6 className="font-w-6 text-white animated3">2020 Latest Style</h6>
                                                <h1 className="mb-4 animated3 text-white">Trending Fruits Collection</h1>
                                                <div className="animated3 ">
                                                    <a className="btn btn-dark" href="#">View Collection</a>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sponsor">
                <div className="sponsor-logo">
                   <div className="sponsor-header text-center">
                      <h2>AS FEATURED IN</h2>
                   </div>
                   <div className="logo-bar text-center">
                     {sponsors[0].map( sponsor =>   
                       <div key={sponsor.id} className="logo-bar-item">
                         <img src={sponsor.img}></img>
                       </div>
                      )} 
                   </div>
                </div>
            </section>
            <section className="contact-section">
               <div className="page-width">
                 <div className="row">
                        {aboutRow[0].map(about =>
                            <div key={about.id} className="col-md-4">
                                <div className="text-center">
                                    <a href="#">
                                        <img src={about.img}></img>
                                        <h3>{about.title}</h3>
                                    </a>
                                </div>
                            </div>
                        )}
                 </div>
               </div>
            </section>
            <section className="about-section">
               <div className="row">
                 <div className="col-md-6">
                    <div className="about-image">
                      <img src="https://cdn.shopify.com/s/files/1/0020/6539/9861/files/left-man-new.png">
                      </img>
                    </div>
                 </div>
                 <div className="col-md-6">
                    <div className="about-content">
                        <h1>ABOUT <span>TEAM POWER HOUSE</span></h1>
                        <p>Our mission at  company has been, and always will be, to help change as many people's lives as we can.⁣⁣</p>
                        <p>We've been in your shoes …⁣⁣</p>
                        <p>⁣⁣When you look in the mirror, and you're not happy with what looks back at you ...⁣⁣</p>
                        <p>⁣⁣When you don't know where or how to start ...⁣⁣</p>
                        <p>⁣⁣Don't feel alone. We have been there.⁣⁣</p>
                        <p>⁣⁣It's our obligation to help people, just like you. People who are willing to do the work and genuinely WANT to make a change, but just need some guidance in reaching their goals.⁣⁣</p>
                        <p>We wanted to give you a time-tested blueprint that lays out the exact steps with information you need to take back control of your life</p>
                         {/* <div className="row">
                         <ul className="col-md-6">
                                <li><i className="las la-fast-forward"></i>Mr Great Britain (2010)</li>
                                <li><i className="las la-fast-forward"></i>Mr International (2010)</li>
                                <li><i className="las la-fast-forward"></i>UK National Champion (2013)</li>
                                <li><i className="las la-fast-forward"></i>British Champion (2013)</li>
                                <li><i className="las la-fast-forward"></i>European Arnold Classic Champion (2013)</li>
                                <li><i className="las la-fast-forward"></i>Overall European Arnold Classic Champion (2013)</li>
                                <li><i className="las la-fast-forward"></i>IFBB Pittsburgh Pro Champion (2015)</li>
                                <li><i className="las la-fast-forward"></i>IFBB Atlanta Pro Seaboard Champion (2015)</li>
                            </ul> 
                            <ul className="col-md-6">
                                <li><i className="las la-fast-forward"></i>Mr Great Britain (2010)</li>
                                <li><i className="las la-fast-forward"></i>Mr International (2010)</li>
                                <li><i className="las la-fast-forward"></i>UK National Champion (2013)</li>
                                <li><i className="las la-fast-forward"></i>British Champion (2013)</li>
                                <li><i className="las la-fast-forward"></i>European Arnold Classic Champion (2013)</li>
                                <li><i className="las la-fast-forward"></i>Overall European Arnold Classic Champion (2013)</li>
                                <li><i className="las la-fast-forward"></i>IFBB Pittsburgh Pro Champion (2015)</li>
                                <li><i className="las la-fast-forward"></i>IFBB Atlanta Pro Seaboard Champion (2015)</li>
                            </ul>   
                         </div> */}  
                    </div> 
                 </div>
               </div>
            </section>
            <section className="social-media">
               <div className="page-width">
                  <div className="row">
                      <div className="col-md-6">
                         <div className="video">
                             <div className="video-top">
                                <div className="video-left">
                                        <i className="lab la-youtube" aria-hidden="true"></i>
                                        <span>LATEST VIDEO</span>
                                    </div>
                                    <div className="video-right">
                                        <span>
                                            <a href="#" target="_blank">SUBSCRIBE 122K</a>
                                        </span>
                                    </div>
                             </div>
                             <div className="video-full">
                                    <iframe width="100%" height="268" src="https://www.youtube.com/embed/hwstbfqulw8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                             </div>
                         </div>
                      </div>
                      <div className="col-md-6">
                         <div className="video">
                             <div className="video-top">
                                <div className="video-left">
                                        <i className="lab la-instagram" aria-hidden="true"></i>
                                        <span>INSTAGRAM</span>
                                    </div>
                                    <div className="video-right insta-right">
                                        <span>
                                            <a href="https://instagram.com/teampowerhouseofficial?igshid=1r13qxpxl2xem" target="_blank">FOLLOW</a>
                                        </span>
                                    </div>
                             </div>
                         </div>
                      </div>
                  </div>
               </div>
            </section>
            <section className="shop-section">
              <ul className="shop-items p-0">
                  <li>
                    <div className="row">
                        <div className="col-md-6">

                         </div>
                        <div className ="col-md-6">
                            <div className="logo-link text-center">
	                         <span>
                              <img src="https://cdn.shopify.com/s/files/1/0020/6539/9861/files/logo_d45cc742-2e3b-40c7-86ee-b199c423a00d.png"></img>
                             </span>
	                         <a href="#" target="_blank">Shop now</a>
                          </div>
                         </div>
                     </div>
                  </li>
                  <li>
                    <div className="row">
                        <div className="col-md-6">

                         </div>
                        <div className ="col-md-6">
                            <div className="logo-link text-center">
	                         <span>
                              <img src="https://cdn.shopify.com/s/files/1/0020/6539/9861/files/logo_d45cc742-2e3b-40c7-86ee-b199c423a00d.png"></img>
                             </span>
	                         <a href="#" target="_blank">Shop now</a>
                          </div>
                         </div>
                     </div>
                  </li>
                  <li>
                    <div className="row">
                        <div className="col-md-6">

                         </div>
                        <div className ="col-md-6">
                            <div className="logo-link text-center">
	                         <span>
                              <img src="https://cdn.shopify.com/s/files/1/0020/6539/9861/files/logo_d45cc742-2e3b-40c7-86ee-b199c423a00d.png"></img>
                             </span>
	                         <a href="#" target="_blank">Shop now</a>
                          </div>
                         </div>
                     </div>
                  </li>
                  <li>
                    <div className="row">
                        <div className="col-md-6">

                         </div>
                        <div className ="col-md-6 text-center">
                            <div className="logo-link">
	                         <span>
                              <img src="https://cdn.shopify.com/s/files/1/0020/6539/9861/files/logo_d45cc742-2e3b-40c7-86ee-b199c423a00d.png"></img>
                             </span>
	                         <a href="#" target="_blank">Shop now</a>
                          </div>
                         </div>
                     </div>
                  </li>            
              </ul>
            </section>
        </>
    );
}

export default Home; 