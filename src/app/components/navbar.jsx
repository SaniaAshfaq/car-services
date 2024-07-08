"use client";
import Image from "next/image";
import logo from '../../../public/Images/logo.png';
import Link from "next/link";
import resicon from '../../../public/Images/Res-icon.png';
import crossicon from '../../../public/Images/cross.jpg'
import { useState } from "react";
export default function Navbar()
{
    let[showDiv , SetShowDiv]= useState(true);
    let ShowNav = ()=>{
      SetShowDiv(!showDiv);
    }
    return(
        <>
        <nav className=" flex items-center justify-center flex-col relative ">
            {/* main iv of navbar which will hold all the data */}
            <div className=" w-11/12 md:w-10/12 bg-white h-16 lg:h-20 flex items-center justify-between relative">
                {/* //logo div */}
                <div className="md:ml-6">
                    <Image src={logo} alt="logo"/>
                </div>
                {/* links div  */}
                <div className=" lg:flex lg:gap-10 font-Roboto font-medium hidden">
                 <Link href = "#">
                  Home
                 </Link>
                 <Link href= "#">
                  Features
                 </Link>
                 <Link href= "#">
                  Pricing
                 </Link>
                 <Link href= "#">
                  Contact
                 </Link>
                </div>
                {/* signup login div */}
                <div className=" md:flex  md:gap-6 md:mr-6 hidden">
                    <button>Sign In</button>
                    <button className=" bg-[#018FFC] text-white py-3 px-6 font-Roboto font-medium hover:bg-[#045fa5] rounded-md">Register</button>
                </div>

                <div className=" md:hidden mr-5">
                    { showDiv ? 
                    <Image src={resicon} alt="responsive-icon" className=" w-8 h-8 " onClick={ShowNav} />
                    :
                    <Image src={crossicon} alt="Cross-icon" className=" w-8 h-8 " onClick={ShowNav} />
                    }
                </div>

            </div>

            {/* responsive links for medium devices */}

            <div className="w-10/12 h-[40px] bg-[#e7f3fc] hidden md:flex items-center gap-10 justify-center lg:hidden  border-t-2 border-blue-950">
        
                 <Link href = "#">
                  Home
                 </Link>
                 <Link href= "#">
                  Features
                 </Link>
                 <Link href= "#">
                  Pricing
                 </Link>
                 <Link href= "#">
                  Contact
                 </Link>

            </div>
             {/* div for mobile devices reponisve nav links */}
            <div className={ `w-11/12 bg-white absolute top-16 flex-col items-center justify-center gap-4 py-3  border-t-2 border-blue-950 md:hidden ${showDiv ? 'hidden' : 'flex'}`}>

            <Link href = "#">
                  Home
                 </Link>
                 <Link href= "#">
                  Features
                 </Link>
                 <Link href= "#">
                  Pricing
                 </Link>
                 <Link href= "#">
                  Contact
                 </Link>
                 <button>Sign In</button>
                 <button className=" bg-[#018FFC] text-white py-3 px-6 font-Roboto font-medium hover:bg-[#045fa5]">Register</button>
            

            </div>



        </nav>
        </>
    )
}