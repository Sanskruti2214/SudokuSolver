import React from 'react';
import './Splash.css';
import Hero from './Hero.js';
import Sudokuimg from '../Images/Sudokuimg.jpg';
import clever1 from '../Images/clever1.png';
export default function Splash() {
    return (
        <>
            <Hero/>
            <img className='solver-img' src={Sudokuimg} alt='logo' />
            <img className='clever' src={clever1} alt='clever' />

        </>
    )
}