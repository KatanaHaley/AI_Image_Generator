import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { ailogo } from '../assets';

import { BsSearch } from "react-icons/bs";
import { BiArchive } from "react-icons/bi";
import { CiCamera } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { GiBrainTentacle } from "react-icons/gi";

const Footer = () => {
    return (
        <>
            <div className=" grid  flex flex-col justify-center items-center fixed bottom-0 left-0 w-screen w-30% h-20 m-0 flex flex-row bg-black text-white shadow-lg">
                <div className="items-center justify-center flex flex-col">
                    <GiBrainTentacle size="30" className="" />
                    <Link to="/">
                        <p className="font-mono font-light text-lg">IMAGINARIUM</p>
                    </Link>
                    <Link to="/contact">
                        <p className="font-display text-sm text-[#919191]">Built by Haley Engineering Services</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);

export default Footer