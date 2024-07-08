
import Image from "next/image";
import location from '../../../public/Images/Location1.png'
export default function Locate()
{
    return(
        <>
        <div className=" flex flex-col items-center justify-center my-20 gap-8">
        <h1 className=" text-[35px] md:text-[40px] tracking-tight font-Oswald leading-[50.9px] text-center font-semibold">You are here. So are we!</h1>

        <div className="bg-white py-1  md:w-2/5 rounded-md flex w-4/5 border border-grey">
        <input type="text" placeholder="Enter your zip code"  className="border-2 w-9/12 lg:h-12 h-10 border-white focus:border-white focus:outline-none"/>
        <button className=" bg-[#018FFC] text-white lg:py-3 lg:px-10 px-5 pr-3 font-Roboto font-medium hover:bg-[#045fa5] rounded-md">Check</button>
      </div>

      <div className=" w-[97%] md:w-4/5">
        <Image src={location} alt="location" className="md:w-full"/>
      </div>

        </div>
        
        
        
        </>
    )
}