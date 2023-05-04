import React from "react";
import { Main } from "./first.styled";
import { ButtonClick } from "./first.styled";
import logo from "./imgTwo.jpg";
import { BiSearch } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import Hero from "./Hero";

const First = () => {
  return (
    <Main>
      <div className='flex bg-white items-center pt-2 justify-between'>
       <div className="flex">
        <img className='bg-white pl-14 pt-3 cursor-pointer' src={logo} alt='' />
        <ul className='flex space-x-8 bg-white pt-4 pl-24'>
          <li className='bg-white text-sm font-medium cursor-pointer hover:text-red-500'>COLLECTION</li>
          <li className='bg-white text-sm font-medium cursor-pointer hover:text-red-500'>GIFT ITEMS</li>
          <li className='bg-white text-sm font-medium cursor-pointer hover:text-red-500'>ACCESSORIES</li>
          <li className='bg-white text-sm font-medium cursor-pointer hover:text-red-500'>BLOG</li>
        </ul>
       </div>

        <div className='flex bg-white content-end pr-16'>
             <div className="flex bg-white pt-5 pr-14 space-x-5">
                 <BiSearch className='searchIcon bg-white text-xl cursor-pointer hover:text-red-500' />
                 <BiCartAlt className='cartIcon bg-white text-xl cursor-pointer hover:text-red-500' />
                 <MdPersonOutline className='profileIcon bg-white text-xl cursor-pointer hover:text-red-500' />
             </div>
             <div className="bg-white pt-2">
                 <ButtonClick className="hover:bg-blue-900">JOIN US</ButtonClick>
             </div>
        </div>


      </div>
      <Hero />
    </Main>
  );
};

export default First;
