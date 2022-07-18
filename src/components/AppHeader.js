import React from 'react';
import autoBindReact from 'auto-bind/react';

import HamburgerButton from './HamburgerButton';
import Navbar from './Navbar';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveHamburger: false,
    };

    autoBindReact(this);
  }

  onClickHamburgerHandler = () => {
    this.setState(prevState => ({
      isActiveHamburger: !prevState.isActiveHamburger
    }))
  }

  render() {
    window.onscroll = () => {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;
  
      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    }

    return (
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#home" className="font-bold text-lg text-primary block py-6">virgiawan</a>
            </div>
            <div className="flex items-center justify-center px-4">
              <HamburgerButton 
              isActiveHamburger={this.state.isActiveHamburger} 
              onClickHamburger={this.onClickHamburgerHandler}
              />
              <Navbar 
              isActiveHamburger={this.state.isActiveHamburger}
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;