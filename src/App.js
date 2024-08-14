import React from 'react';
import styled from 'styled-components';
import './assets/css/fdash.css';
import Sidebar from './components/Sidebar'
import RighSidebar from './components/RightSidebar'
import Dashboard from './components/Dashboard'
import wflogo from "./assets/wf_logo.png"

function App() {
  return (
    <Div>
	 <header className="ps-masthead presentedElement" role="banner" data-cid="tcm:84-224274-16" data-ctid="tcm:91-223647-32">
        <div className="ps-masthead-wrapper">
            <div className="new_logoOuter">
                <div className="ps-logo-home">
                   <img src={ wflogo } alt="Wells Fargo Home Page"/>
                </div>
            </div>
            <nav className="ps-right-nav" aria-label="Header Navigation">
                <ul>
				
                    
                        <li><a href="/locator/">ATMs/Locations</a></li>
                    
                        <li><a href="#" className="ps-masthead-help" role="button" aria-expanded="false">Help</a></li>
                    
                        <li><a href="/about/">About Us</a></li> 
                      
                        <li className="ps-search-item"><a href="#" className="ps-nxgSearchIcon" id="nxgSearchButton" aria-label="Search, Opens a dialog.">&nbsp;&nbsp;</a></li>
                    
                
					<li className="ps-sign-on-item"> <div className="ps-masthead-sign-on">
                
                 <a data-platform="external" href="https://connect.secure.wellsfargo.com/auth/login/present?origin=cob&amp;LOB=CONS" className="ps-sign-on-text">logoff</a>
           
            </div></li>
                </ul>
            </nav>
           
            <button type="button" data-role="none" className="ps-hamburger-link" name="hamburger-link" data-effect="st-effect-1" aria-expanded="false" aria-label="Open Menu Navigation">
                <div className="ps-icon-bar"></div>
                <div className="ps-icon-bar"></div>
                <div className="ps-icon-bar"></div>
                <span>MENU</span>
            </button>  	 
        </div>
    </header>
      <Sidebar />
      <Dashboard />
      <RighSidebar />
    </Div>
  );
}

export default App;
const Div = styled.div `
position: relative;
`;
