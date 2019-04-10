import React from 'react';
import image1 from '../images/sample.jpg';
import '../css/ImageStyle.css';

import image9 from './Desktop/Optimized/image9.png';
import image10 from './Desktop/Optimized/image10.png';
import image11 from './Desktop/Optimized/image11.png';
import image12 from './Desktop/Optimized/image12.png';
import image13 from './Desktop/Optimized/image13.png';
import image14 from './Desktop/Optimized/image14.png';
import image15 from './Desktop/Optimized/image15.png';
import image16 from './Desktop/Optimized/image16.png';

// Hewlett Harbor

export class Town2 extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="row">
          <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="gallery-title">Our Portfolio</h1>
          </div>


          <br/>



              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter hdpe">
                  <img src={image9} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter sprinkle">
                  <img src={image10} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter hdpe">
                  <img src={image11} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation">
                  <img src={image12} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter spray">
                  <img src={image13} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation">
                  <img src={image14} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter spray">
                  <img src={image15} className="img-responsive" alt="landscape"/>
              </div>

              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation">
                  <img src={image16} className="img-responsive" alt="landscape"/>
              </div>

          </div>
      </div>
    )
  }
}
