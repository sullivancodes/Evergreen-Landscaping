import React from 'react';
import {Footer} from './Footer.js';

let formContainer = {
  width: 300
}
let inputFieldStyle = {
  height: 120
}
let inputStyle = {
  width: '100%',
  boxShadow: '-5px 5px 5px rgba(0,0,0,0.2)',
  border: 'none',
  borderRadius: 5,
  height: 30
}
let textFieldStyle = {
  height: 100,

}
let textAreaStyle = {
  height: 100,
  width: "100%",
  boxShadow: '-5px 5px 5px rgba(0,0,0,0.2)',
  resizable: 'none',
  borderRadius: 5,
  border: 'none'

}
let labelStyle = {
  color: 'black',
  fontFamily: "Muli",
  fontWeight: 100,
  letterSpacing: 2,
  fontSize: 18
}
let contactTitleStyle = {
  marginBottom: 50
}
let buttonFieldStyle = {
  marginTop: 40
}
let buttonStyle = {
  width: 150,
  height: 30,
  fontFamily: 'Muli',
  fontSize: 18,
  borderRadius: 5,
  boxShadow: '-5px 5px 5px rgba(0,0,0,0.2)',
  border: 'none',
  backgroundColor: 'white',
  marginTop: 5
}

export class Contact extends React.Component {
    render() {
        return(
          <div className="container-fluid">
              <div className="row row-a">
                  <div className="col-md-12 col-a">
                    <div>
                      <h1 style={contactTitleStyle}>Contact Us</h1>
                      <div className="form-container" style={formContainer}>
                        <form action="mail_handler.php" method="post">
                          <div style={inputFieldStyle}>
                            <label style={labelStyle}>Name</label><br />
                            <input type="text" name="name" style={inputStyle}/>
                          </div>
                          <div style={inputFieldStyle}>
                            <label style={labelStyle}>Email</label><br />
                            <input type="text" name="email" style={inputStyle}/>
                          </div>
                          <div style={textFieldStyle}>
                            <label style={labelStyle}>Message</label><br />
                            <textarea name="comments" style={textAreaStyle}></textarea>
                          </div>
                          <div className="centered-content" style={buttonFieldStyle}>
                            <button type="submit" name="submit" value="Submit" style={buttonStyle}>Submit</button>
                          </div>
                        </form>
                      </div>
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
