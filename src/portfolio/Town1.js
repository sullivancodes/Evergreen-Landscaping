import React from 'react';
import image1 from './Desktop/Optimized/image1.png';
import image2 from './Desktop/Optimized/image2.png';
import image3 from './Desktop/Optimized/image3.png';
import image4 from './Desktop/Optimized/image4.png';
import image5 from './Desktop/Optimized/image5.png';
import image6 from './Desktop/Optimized/image6.png';
import image7 from './Desktop/Optimized/image7.png';
import image8 from './Desktop/Optimized/image8.png';


import '../css/ImageStyle.css';

// Atlantic Beach

export class Town1 extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="row">
          <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="gallery-title">Our Portfolio</h1>
          </div>


          <br/>



              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter hdpe">
                  <img src={image1} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter sprinkle">
                  <img src={image2} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter hdpe">
                  <img src={image3} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation">
                  <img src={image4} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter spray">
                  <img src={image5} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation">
                  <img src={image6} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter spray">
                  <img src={image7} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation">
                  <img src={image8} className="img-responsive" alt="landscape"/>
              </div>

              
          </div>
      </div>


    )
  }
}
