import React, { Component } from 'react';
import resumeData from '../resumeData';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'

const navItems = ['home', 'about', 'resume', 'portfolio', 'contact']

export default class Header extends Component {

  state={
    showMobileMenu:false,
  }

  render() {
    const {showMobileMenu} = this.state
    const navClass = showMobileMenu ? 'nav' : 'nav hider'
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <div className="mobile-btn"
              onClick={()=>this.setState({showMobileMenu:!showMobileMenu})}>
            </div>
            {/* <div className="mobile-btn" href="#" title="Hide navigation">Hide navigation</div> */}
            <ul id="nav" className={navClass}>
              {navItems.map((item,i)=>{
                return <li key={i}>
                  <a href={`#${item}`} className="active">
                    {capitalize(item)}
                    <span></span>
                  </a>
                  <div class="fp-tooltip right"></div>
                </li>
              })}
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3 className="home-subtitle">{resumeData.roleDescription}
              </h3>
              <hr/>
              <ul className="social">
                {resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                  return(<li key={item.name}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                  </li>)
                })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}