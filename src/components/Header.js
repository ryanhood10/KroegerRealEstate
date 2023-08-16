import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from './assets/pictures/Logo.jpg'

const Header = () => {
  const location = useLocation();

  //importing state for navbar toggle
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header>
      <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto font-bold'>
        <img className='m-4' src={Logo} alt="logo"></img>
        <h1 className='w-full text-xl font-bold text-blue-700 m-4'></h1>
        <h1 className='w-full text-xl font-bold text-blue-700 m-4'></h1>
        <h1 className='w-full text-xl font-bold text-blue-700 m-4'></h1>
        <h1 className='w-full text-xl font-bold text-blue-700 m-4'></h1>
        <h1 className='w-full text-xl font-bold text-blue-700 m-4'></h1>
        <h1 className='w-full text-xl font-bold text-blue-700 m-4'>615.377.9779</h1>
      


        

   
      </nav>
    </header>
  );
};

export default Header;
