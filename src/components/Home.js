import React, {Component} from 'react';
import Navbar from '../bootstrap/Navbar'
import {Link} from "react-router-dom";
import github from '../images/github.png'
import ubuntu from '../images/ubuntu.png';
import nodejs from '../images/nodejs.png';
import jenkins from '../images/jenkins.png';
import sonarqube from '../images/sonarqube.png';
import jest from '../images/jest.jpeg';
import puppeteer from '../images/puppeteer.png';
import react from '../images/react.jpeg';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className='container'>
                    <div className='ui text-center'>
                        <div>
                            <header className='info-panel'>CI/CD IMPLEMENTATION</header>
                            <span className='sub-header'>React Front-end Application</span>
                        </div>
                        <div>
                            <Link to='/features'>
                                <button id='button-features' className='ui basic green button m-xl-5'>Open Implemented Features</button>
                            </Link>
                        </div>
                        <div className='row mt-xl-5 ml-5 mr-5'>
                            <div className='col mt-md-5'>
                                <img src={ubuntu} alt='1'/>
                            </div>
                            <div className='col mt-md-5' >
                                <img src={jenkins} alt='2'/>
                            </div>
                            <div className='col mt-md-5' >
                                <img src={sonarqube} alt='3'/>
                            </div>
                            <div className='col mt-md-5'>
                                <img src={github} alt='4'/>
                            </div>
                            <div className='col mt-md-5'>
                                <img src={nodejs} alt='5'/>
                            </div>
                            <div className='col mt-md-5'>
                                <img src={react} alt='6'/>
                            </div>
                            <div className='col mt-md-5'>
                                <img src={jest} alt='7'/>
                            </div>
                            <div className='col mt-md-5'>
                                <img src={puppeteer} alt='8'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
