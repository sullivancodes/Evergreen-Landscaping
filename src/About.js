import React from 'react';
import './css/fonts.css';
import {Footer} from './Footer.js';
import './css/GlobalStyle.css';

export class About extends React.Component {
    render() {
        return(
          <div className="container-fluid">
              <div className="row row-b">
                  <div className="col-md-12 col-a">
                  <div>
                    <h1>About Us</h1>
                    <p>Evergreen Landscape Design was founded by Tom Owens in 1976. Evergreen&apos;s humble roots began as a one person company. As a young entrepreneur, Tom saw his vision coming together one lawn at a time. Now, thirty four years later, Evergreen is a full-service landscape architecture company providing the highest quality proffessional service from design to completion.</p>
                    <p>Tom continued his vision and grew his family company from the ground up. His creative expertise along with his 34 years experience in landscaping design and construction enable him to turn each client&apos;s landscape vision into reality.</p>
                    </div>
                  </div>
                  <div className="call-div">
                    <h1><span className="call-text">Call </span>(516) 867-3800</h1>
                  </div>
              </div>

              <Footer />
            </div>
        );
    }
}
