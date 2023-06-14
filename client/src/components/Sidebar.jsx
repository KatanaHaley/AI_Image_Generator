import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { ailogo } from '../assets';

import { BsSearch } from "react-icons/bs";
import { BiArchive } from "react-icons/bi";
import { CiCamera } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { GiBrainTentacle } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-30% m-0 flex flex-col bg-black text-white shadow-lg">
         <Link to="/">
         <GiBrainTentacle size="50" className="m-5"/>
      </Link>
        {/* <p>Imaginarium</p> */}
        <Link to="/create-post" className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 font-inter font-medium bg-[#3094E6] text-white text-center px-4 py-2 m-2 rounded-md">
      Create
    </Link>
        {/* <SideBarIcon icon={<BsSearch size="28" color="green" />} className="text-green-500" />
        <SideBarIcon icon={<BiArchive size="28" color="pink"/>} />
        <Link to="/upload">
        <SideBarIcon icon={<CiCamera size="28" color="red" />} />
        </Link> */}
        <div className="fixed bottom-20 ml-6 items-center justify-center flex flex-col">
        <Link to="/contact">
        <SideBarIcon icon={<AiOutlineMail size="35" color="#2FB52F" />} />
        </Link>
        </div>
       {/* <SideBarIcon icon={<AiOutlineHeart size="28" color="purple" />} /> */}
 

    </div>
  )
}

const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);

export default Sidebar