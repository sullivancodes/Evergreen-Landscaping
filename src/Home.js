import React from 'react';
import './css/fonts.css';
import './css/GlobalStyle.css';
import BackgroundSlideshow from 'react-background-slideshow';
import { Link } from 'react-router-dom';
import {InstagramFeed} from './InstagramFeed.js';
import {Footer} from './Footer.js';

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';

let callHighlight = {
  color: '#3614CC',
  cursor: 'pointer'
}

let slideshowStyle = {
  zIndex: 0,
  height: 20
}

let aboveStyle = {
  zIndex: 100
}




export class Home extends React.Component {




    render() {
        return(
            <div className="container-fluid">
                <div className="row row-a">
                    <BackgroundSlideshow style={slideshowStyle} images={[ image1, image2, image3 ]} />
                    <div className="col-md-12 col-a" style={aboveStyle}>
                    <div>
                      <h1>Welcome</h1>
                      <p>Evergreen Landscape Design can help you achieve your landscape dreams. We can help with whatever you would like to do to imporove or alter the aesthetics of your patch of paradise.</p>
                      <p>Evergreen serves the Western Long Island Area with landscaping and landscape design needs. Commercial or residential, small, medium, or large... we can help.</p>
                      <p>Our commitment is to customer satisfaction and exceptional quality.</p>
                      <p><Link className="highlight" style={callHighlight} to="/contact">Contact us</Link> today to discuss your landscaping needs!</p>
                      </div>
                    </div>
                    <div className="call-div" style={aboveStyle}>
                      <h1><span className="call-text">Call </span>(516) 867-3800</h1>
                    </div>

                </div>

                <div className="row">
                  <div className="col-md-12 col-b">
                    <h1>Follow our Instagram!</h1>
                  </div>
                </div>

                <div className="row insta-row">
                  <InstagramFeed />
                </div>

                <Footer />
            </div>

        );
    }
}
