import React from 'react';
import logo from '../assist/logo.png'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content">
            <div>
                <img src={logo} alt=''></img> 
                <p className="font-bold">
                   Your Plant Merketplase
                </p>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
             
        </footer>
    );
};

export default Footer;