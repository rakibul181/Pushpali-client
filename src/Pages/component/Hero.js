import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assist/hero.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200    " >
            <div className="hero-content flex-col-reverse lg:flex-row-reverse ">
                <img src= {hero} alt='' />
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-extrabold font-serif"><span className='text-[#294515]'>Welcome</span> To <spam className='text-[#00AA95]'>Pushpali</spam>  Plant Shop!</h1>
                    <p className="py-6">Pushpali is a online based resele website. you can post for sele product or buy product as you want</p>
                    <Link to={'/login'}><button className="btn border-none bg-[#00AA95]">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;