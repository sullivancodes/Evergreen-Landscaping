import React from 'react';
import './css/fonts.css';
import './dropdownmenu/dropdownstyle.css';
import {Town1} from './portfolio/Town1.js';
import {Town2} from './portfolio/Town2';
import { Town3 } from './portfolio/Town3';
import { Town4 } from './portfolio/Town4';
import { Town5 } from './portfolio/Town5';
import { Town6 } from './portfolio/Town6';
import {Footer} from './Footer.js';


let listStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10
}

let listStyleA = {
  color: 'black',
  paddingLeft: 10
}

let buttonStyle = {
  paddingLeft: 20,
  fontFamily: 'Pavanam'
}

let innerDiv = {
  backgroundColor: "rgba(0,0,0,0.1)",
  height: 70
};

let dropdownStyle = {
  boxShadow: '-5px 5px 5px rgba(0,0,0,0.2)'
}


export class Portfolio extends React.Component {
  constructor(){
   super();

   this.state = {
         displayMenu: false,
         town1: true,
         town2: false
       };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    this.changeTown = this.changeTown.bind(this);

  };



  changeTown(town) {

    let ds = false;


    if (town === 'town1') {
      this.setState( {
        town1: true,
        town2: ds
        })
    }
    if (town === 'town2') {
      this.setState( {
        town1: ds,
        town2: true
        })
    }



  }

  showDropdownMenu(event) {
      event.preventDefault();
      this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
      });
    }

    hideDropdownMenu() {
      this.setState({ displayMenu: false }, () => {
        document.removeEventListener('click', this.hideDropdownMenu);
      });

    }


    render() {
        return(
          <div className="container-fluid">
              <div className="row ">
                  <div className="col-md-12 centered-content" style={innerDiv}>
                  <div  className="dropdown" style = {{width:"200px"}} >
                   <div className="button" onClick={this.showDropdownMenu} style={buttonStyle}>Page</div>

                    { this.state.displayMenu ? (
                    <ul className="dropdown-ul" style={dropdownStyle}>
                   <li className="dropdown-li" style={listStyle}><a className="active" href="#Create Page" style={listStyleA} onClick={ () => this.changeTown('town1') }>Page 1</a></li>
                   <li className="dropdown-li" style={listStyle}><a href="#Manage Pages" style={listStyleA} onClick={ () => this.changeTown('town2') }>Page 2</a></li>
                    </ul>
                  ):
                  (
                    null
                  )
                  }

                 </div>
                 </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  { this.state.town1 && <Town1 />}
                  { this.state.town2 && <Town2 /> }
                </div>
              </div>
              <Footer />
            </div>
        );
    }
}
