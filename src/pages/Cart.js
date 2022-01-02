import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Cart(){
    return(
        <section>
        <div className="container cart">
          <div className="row">
            <div className="col-lg-6 col-12">
                <div className='subimage-container'>
                  <OwlCarousel className="owl-theme" items={4} loop={false}
                  dots={false} mouseDrag={false} touchDrag={false} pullDrag={false}
                  rewind={true} autoplay={false} margin={0} nav>
                    <div className="item link" data-thumb="assets/images/product/p11.jpg"  data-src="assets/images/product/p11.jpg">
                      <img className="img-fluid w-100" src="assets/images/product/p11.jpg" alt="" />
                    </div>
                    <div className="item link" data-thumb="assets/images/product/p13.jpg" data-src="assets/images/product/p13.jpg">
                      <img className="img-fluid w-100" src="assets/images/product/p13.jpg" alt="" />
                    </div>
                    <div className="item link" data-thumb="assets/images/product/p10.jpg" data-src="assets/images/product/p10.jpg">
                      <img className="img-fluid w-100" src="assets/images/product/p10.jpg" alt="" />
                    </div>
                    <div className="item link" data-thumb="assets/images/product/p15.jpg" data-src="assets/images/product/p15.jpg">
                      <img className="img-fluid w-100" src="assets/images/product/p15.jpg" alt="" />
                    </div>
                    <div className="item link" data-thumb="assets/images/product/p11.jpg" data-src="assets/images/product/p11.jpg">
                      <img className="img-fluid w-100" src="assets/images/product/p11.jpg" alt="" />
                    </div>
                    <div className="item link" data-thumb="assets/images/product/p13.jpg" data-src="assets/images/product/p13.jpg">
                      <img className="img-fluid w-100" src="assets/images/product/p13.jpg" alt="" />
                    </div>
                  </OwlCarousel>
                </div>
                <div className='image-container'>
                  <img className="img-fluid w-100" id="cart_HeaderImage"
                    src="assets/images/product/p11.jpg" alt="" /> 
                  </div>
            </div>
            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="product-details">
                <h1 className="h4 mb-0 font-w-6">Unpaired Running Shoes</h1>
                <div className="star-rating mb-4"><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i><i className="las la-star"></i>
                </div> <span className="product-price h5 text-pink">$25.00 <del className="text-muted h6">$35.00</del></span>
                <ul className="list-unstyled my-3">
                  <li><small>Availibility: <span className="text-green"> In Stock</span> </small>
                  </li>
                  <li className="font-w-4"><small>Categories :<span className="text-muted"> womens, clothing, dresses, footwear</span></small>
                  </li>
                </ul>
                <p className="mb-4 desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. vulputate adipiscing cursus eu, suscipit id nulla.</p>
                <div className="d-sm-flex align-items-center mt-5">
                  <button className="btn btn-primary btn-animated mr-sm-3 mb-3 mb-sm-0"><i className="las la-shopping-cart mr-2"></i>Add To Cart</button>
                  <a className="btn btn-animated btn-dark" href="#"> <i className="lar la-heart mr-2 ic-1-2x"></i>Add To Wishlist
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Cart;