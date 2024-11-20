import {Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header() {
 const [togglemenu,settoggleMenu] = useState(false);
    return <header className="flex after justify-between px-5 py-5 bg-primary" >
        <a className="font-bold text-white" href="#">DEVOLOP<span  className="text-gray-900">ER</span> </a>
        <nav className="hidden md:block">
            <ul className="flex text-white">
            <li><a href="home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>

        </ul>
        </nav>
        {togglemenu && <nav className="block md:hidden ">
            <ul onClick={() => settoggleMenu(!togglemenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
           

        </ul>
        </nav>}
        <button onClick={() => settoggleMenu(!togglemenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        
            </header>
}