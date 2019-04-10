import React from 'react';
import './css/fonts.css';
import './css/ServicesStyle.css';
import {Footer} from './Footer.js';

import DesignImg from './portfolio/Desktop/Optimized/image3.png';
import MainImg from './portfolio/Desktop/Optimized/image16.png';
import SnowImg from './portfolio/Desktop/Optimized/image4.png';

let serviceTitle = {
  fontSize: 25,
  fontFamily: 'Muli',
  borderLeft: '3px solid black',
  paddingLeft: 5
};
let infoStyle = {
  fontFamily: 'Muli',
  fontSize: 18,
  textAlign: 'justify',
  paddingTop: 5
}
let listStyle = {
  listStyle: 'none',
  fontFamily: 'Muli',
  marginLeft: '-150px'
}
export class Services extends React.Component {



    render() {
        return(
          <div className="container-fluid">
              <div className="row row-c">
                  <div className="col-md-12 col-a">
                  <div>
                    <h1>Services</h1>
                    <p>As a visonary, Tom and his team can help bring your outdoor dreams to reality. Listed below are the services we provide. If it is not listed, please ask. With our many years of experience we have come across many different projects and have always delivered our very best.</p>
                  </div>
                  </div>
                  <div className="call-div">
                    <h1><span className="call-text">Call </span>(516) 867-3800</h1>
                  </div>
              </div>
          <div className="container-fluid">
              <div className="row outter-container">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 imgContainer">
                  <img src={DesignImg} className="infoImg"/>
                </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 inner-b">
                    <h1 style={serviceTitle}>Design and Construction</h1>
                    <ul style={listStyle}>
                      <li style={infoStyle}>Walkways</li>
                      <li style={infoStyle}>Water Gardens</li>
                      <li style={infoStyle}>Decks</li>
                      <li style={infoStyle}>Patios</li>
                      <li style={infoStyle}>Irrigation Systems</li>
                      <li style={infoStyle}>Landscape Lighting</li>
                    </ul>
                </div>
              </div>
          </div>
          <div className="container-fluid">
          <div className="row outter-container">
            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 imgContainer">
              <img src={MainImg} className="infoImg"/>
            </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 inner-b">
                  <h1 style={serviceTitle}>Maintenance</h1>
                  <p style={infoStyle}>We work with commercial and residential accounts to provide the best weekly landscape maintenance as well as turf and shrub care; bed design and renovation.</p>
                </div>
              </div>
          </div>
          <div className="container-fluid">
          <div className="row outter-container">
            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 imgContainer">
              <img src={SnowImg} className="infoImg"/>
            </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 inner-c">
                  <h1 style={serviceTitle}>Snow Removal</h1>
                  <p style={infoStyle}>Evergreen continues to provide service and convenience during the cold months as well. With our expert snow and ice management services, your property will be maintained through all four seasons.</p>
                  <p style={infoStyle}>With our snow plows and best in the industry ice melt products, we can keep your parking area, drive way(s), and walk way(s) safe and dry. Our felxibility allows us to create a service plan that will suit all of your needs - 365 days a year.</p>
                </div>
              </div>
          </div>
          <Footer />
            </div>

        );
    }
}
