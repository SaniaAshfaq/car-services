import Image from "next/image";
import hero1 from '../../../public/Images/hero1.png';
import hero2 from '../../../public/Images/hero2.png';
import Navbar from "./navbar";
export default function Hero (){
    return(
        <>
        {/* //The main div which will hold all the data */}
        <main > 
      <div className=" relative  md:pt-12 pt-5  w-full  ">
        {/* background images for the section */}
        <div className=" absolute  top-0 -z-10 w-full h-full">
        <Image src= {hero1} alt="hero1" className="w-full h-full" />
        </div>
        <div  className=" absolute top-0 w-full  -z-10 h-full">
        <Image src= {hero2} alt="hero2"  className="w-full h-full"/>
        </div>
    {/* navbar */}
   <Navbar/>
{/* content of the hero section */}
    <div className="  flex flex-col md:items-center md:justify-center gap-6 lg:gap-8 md:py-14 py-8 pl-8 pr-8">
      <div className="md:text-center">
      <h1 className="text-[34px] md:text-[40px] lg:text-[57px] text-white font-Oswald font-semibold leading-snug"  data-aos="fade-up" >Your Ultimate Car Care </h1>
      <h1 className="text-[34px] md:text-[40px] lg:text-[57px] text-[#018FFC]  font-Oswald font-semibold"  data-aos="fade-up">  Destination</h1>
      </div>
      <p className=" w-full md:w-3/5 lg:w-5/12 text-white  md:text-center font-Roboto text-[14px] md:text-[16px] font-normal"   data-aos="fade-up">Discover the secrets to a smoother ride! From routine upkeep to pro tips, our site offers comprehensive guidance on car maintenance, ensuring your vehicle stays in peak condition</p>
      <div  data-aos="fade-up">
      <button className=" bg-[#018FFC] text-white py-3 px-6 font-Roboto font-medium hover:bg-[#045fa5] rounded-md">Get Started</button>
      </div>
      <div className="bg-white py-1 md:w-2/5 rounded-md flex w-fit"   data-aos="fade-up">
        <input type="text" placeholder="Enter your zip code"  className="border-2 w-9/12 lg:h-12 h-10 border-white focus:border-white focus:outline-none"/>
        <button className=" bg-[#018FFC] text-white lg:py-3 lg:px-10 px-5 pr-3 font-Roboto font-medium hover:bg-[#045fa5] rounded-md">Check</button>
      </div>
    </div>



      </div>
      </main>
        </>
    )
}