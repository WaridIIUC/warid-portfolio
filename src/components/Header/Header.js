import React from 'react';
import NavbarTop from '../NavbarTop/NavbarTop';
import './Header.css'
import img from '../../images/IMG-20201214-WA0001-removebg-preview2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useHistory } from 'react-router-dom';
import { Link } from '@material-ui/core';


const Header = () => {
    let history = useHistory();
    const download = () => {
        
        history.push("https://drive.google.com/uc?export=download&id=1685kCV85kiKF20FBf9nttHctyaLBtTy");
    }
    return (
        <div className="header-main">
            <NavbarTop></NavbarTop>
            <div className = "row">
                <div className="col-md-4">
                    <img src={img} alt="" className = "rounded float-right"/>
                </div>
                <div className="col-md-8 info-main p-4">
                    <h1>Warid Bin Azad</h1>
                    <p>Web Developer | Programmer</p>
                    <dl>
                        <dt>Mobile</dt>
                        <dd>+8801671911645</dd>
                        <dt>Email</dt>
                        <dd>warid.cse.iiuc@gmail.com</dd>
                        <dt>Address</dt>
                        <dd>Khulshi, Chittagong, Bangladesh</dd>
                    </dl>
                    <div className="imp-links w-50 d-flex justify-content-between">
                        <a href = "https://github.com/WaridIIUC" target = "_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="imp-links-single"/></a>
                        <a href = "https://www.facebook.com/warid13/" target = "_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="imp-links-single"/></a>
                        <a href = "https://www.linkedin.com/in/warid-bin-azad-83" target = "_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="imp-links-single"/></a>
                        <a href = "https://drive.google.com/uc?export=download&id=18AoEHuw2J6Ipw3zQl7RMrU-HMN1fOvig" target = "_blank" rel="noreferrer"><FontAwesomeIcon icon={faFilePdf} className="imp-links-single"/></a>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Header;