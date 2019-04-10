import React from 'react';
import './dropdownstyle.css';

let listStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10
}

let listStyleA = {
  color: 'white'
}

class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
       showTown1: false,
       showTown2: false,
       showTown3: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  this.showTown1 = this.showTown1.bind(this);

};

showTown1 = () => {
  const showTown1 = this.state.showTown1;
  this.setState( { showTown1 : !showTown1 })
}
showTown2 = () => {

}
showTown3 = () => {

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
    return (
        <div  className="dropdown" style = {{width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}>Town Name</div>

          { this.state.displayMenu ? (
          <ul className="dropdown-ul">
         <li className="dropdown-li" style={listStyle}><a className="active" href="#Create Page" style={listStyleA}>Town 1</a></li>
         <li className="dropdown-li" style={listStyle}><a href="#Manage Pages" style={listStyleA}>Town 2</a></li>
         <li className="dropdown-li" style={listStyle}><a href="#Create Ads" style={listStyleA}>Town 3</a></li>
         <li className="dropdown-li" style={listStyle}><a href="#Manage Ads" style={listStyleA}>Town 4</a></li>
         <li className="dropdown-li" style={listStyle}><a href="#Activity Logs" style={listStyleA}>Town 5</a></li>
         <li className="dropdown-li" style={listStyle}><a href="#Setting" style={listStyleA}>Town 6</a></li>
         <li className="dropdown-li" style={listStyle}><a href="#Log Out" style={listStyleA}>Town 7</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;
