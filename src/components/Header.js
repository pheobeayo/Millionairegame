import React from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from "../assets/logo.png";






const Header = () => {

    return (
        <nav class="bg-[#008080]">
            <div className='fixed top-0 right-0 left-0 bg-gradient z-50 bg-[#008080]'>
                <div className='flex gap-4 justify-center items-center mx-4 pt-2'>
                   
                <Link to="/"><img src={logo} alt="logo" class='w-20' /></Link>
                    <ul className='flex m-auto gap-20'>
                        <Link to='/millionaire-game' style={{ textDecoration: 'none', color: 'white' }}>Game</Link>
                        <Link to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
                        <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>About us </Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }}>FAQs</Link>
                    </ul>
                    <div class='mx-4 '>
                        <ConnectButton />
                    </div>
                    
                </div>
            </div>
        </nav>
    )



}

export default Header;