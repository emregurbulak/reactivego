import React, { Component } from 'react';
import {animateScroll as scroll} from 'react-scroll';
import logo from "../assets/img/header_transparent.png"
import './Header.css';

class Header extends Component{
	constructor(props){
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    handleScroll() {
    	if(this.mount){
        	this.setState({scroll: window.scrollY});
    	}
    }

    
    scrollToTop (){
        scroll.scrollToTop();
    }

    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;

    }
    
    componentWillUnmount(){
        this.mount = false;
    }
    
	render(){
		return(
			<div>
                <div className="landing-page-wrapper">

                    {/* Start Header Section */}
                    <nav className={`header-section section sticker ${this.state.scroll > this.state.top ? "stick" : ""}`}>
                        <div className="container">
                        <div className="row justify-content-between align-items-center">
                            
                            {/* Logo */}
                            <div className="logo col-6 text-left">
                            	<a href="/">
                            		<img src={logo} className="img-fluid" alt="" />
                            	</a>
                            </div>
                            {/* Logo */}
                            

                            <div className="demo col-6 text-right">
                            <a className="demo-btn" href="https://github.com/emregurbulak">DEMO</a>
                            
                            </div>
                        </div>
                        </div>
                    </nav>
                    {/* Header Section End */}
                
                </div>
            </div>
		)
	}
}

export default Header;