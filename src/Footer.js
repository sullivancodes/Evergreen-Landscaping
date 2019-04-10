import React from 'react';

let containerStyle = {
  backgroundColor: 'white',
  height: 50
}

let tagStyle = {
  color: 'black',
  fontSize: 12,
  width: '100%',
  textAlign: 'center',
  height: '100%',
  fontFamily: 'Muli'
}

let personalTag = {
  color: '#3614CC'
}

export class Footer extends React.Component {
  render() {
    return(
        <div className="row" style={containerStyle}>
          <div className="col-lg-12">
            <h1 style={tagStyle}>&copy; 2018 Evergreen Landscaping Inc. by <span><a href="http://sullivancodes.com/" style={personalTag}>Michael Sullivan</a></span> </h1>
          </div>
        </div>
    )
  }
}
