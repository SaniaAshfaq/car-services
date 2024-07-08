
import Image from "next/image";
import darkfooter from '../../../public/Images/darkfooter.png';
import hero from '../../../public/Images/footerhero.png';
import logo from '../../../public/Images/logo.png';
export default function Footer()
{
    return(
        <>
        <div className="relative text-white flex flex-col lg:flex-row lg:items-center lg:justify-around py-20  text-center lg:text-left"> 
        <Image src={hero} alt="footerher" className=" absolute top-0 w-full h-full -z-20"/>
        <Image src={darkfooter} alt="darkfooter " className=" absolute top-0 h-full -z-20"/>

        <div className="lg:w-[300px] flex flex-col lg:items-start lg:justify-start items-center justify-center  ">
            <Image src={logo} alt="logo" className="my-4"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
            <p className=" p-2 cursor-pointer ">RESOURCES </p>
            <p className=" p-2 cursor-pointer"> Flowbite</p>
            <p className=" p-2 cursor-pointer">Tailwind CSS</p>
        </div>
        <div>
        <p className=" p-2 cursor-pointer ">Follow Us   </p>
            <p className=" p-2 cursor-pointer "> GitHub</p>
            <p className=" p-2 cursor-pointer ">Discord</p>

        </div>
        <div>
        <p className=" p-2 cursor-pointer ">Legal  </p>
            <p className=" p-2 cursor-pointer "> Privacy & policy</p>
            <p className=" p-2 cursor-pointer ">Terms & condition</p>

        </div>
        <div>
            <p className="p-2 cursor-pointer ">Register as provider</p>
            <input type="text" className=" p-2 h-12 mr-1 rounded-lg"/>
            
            <button className=" bg-[#018FFC] text-white py-3 px-6 font-Roboto font-medium hover:bg-[#045fa5] rounded-md">Register</button>
        </div>
        </div>
    
        
        </>
    )
}