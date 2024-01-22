"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import {Bars3Icon} from "@heroicons/react/24/solid"
import { XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';

const Navlinks = [
    {
        title:"Home",
        path: "/"
    },
    {
        title:"About Us",
        path: "#about"
    },
    {
        title:"Work",
        path: "#work"
    },
    {
        title:"Services",
        path: "#services"
    },
    {
        title:"Clients",
        path: "/"
    },
    {
        title:"Team",
        path: "/"
    },
    {
        title:"Contact Us",
        path: "/"
    },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);  
  return (
    <nav className='fixed py-5 top-0 left-0 right-0 z-10 bg-white'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"} className='text-2xl md:text-5xl text-black font-semibold pl-8'>LOGO</Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={()=>setNavbarOpen(true)} className='text-slate-800 flex items-center px-3 py-2 border rounded border-slate-800 '> <Bars3Icon className='h-5 w-5' /></button>
                    ) :(
                        <button onClick={()=>setNavbarOpen(false)} className='text-slate-800 flex items-center px-3 py-2 border rounded border-slate-800 '> <XMarkIcon className='h-5 w-5' /></button>
                    )
                }
            </div>
            <div className="bg-gradient-to-r from-[#b8c4e0] to-[#e9cdcd] px-5 py-5 rounded-[30px] menu hidden md:block md:w-auto" id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-24 mt-0'> 
                    {
                        Navlinks.map( (link, index) => (
                            <li Key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ) 
                        )
                    }
                    </ul>
            </div>
        </div>
        { navbarOpen? <MenuOverlay links={Navlinks} /> :null}
    </nav>
  )
}

export default Navbar
