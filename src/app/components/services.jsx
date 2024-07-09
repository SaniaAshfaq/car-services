import Image from "next/image";
import caricon from '../../../public/Images/servicescar.png';
import caricon1 from '../../../public/Images/servicescarb.png';

import serviceshero from '../../../public/Images/serviceshero.png';
import '../globals.css';
export default function Services()
{
   
    return(
        <>
 

        <div className="bg-[#EBF4FF] p-10 md:py-12 py-2 pb-6" >
            <h1 className=" text-[35px] text-center md:text-[40px] font-Oswald font-semibold py-12">Explore Our Services</h1>

            <div className="flex lg:items-start items-center  justify-center gap-6 lg:flex-row flex-col-reverse">
            <div className=" w-[97%] md:w-3/4 lg:w-1/3 flex flex-col gap-2 ">
            <div className="flex p-[13px] bg-[#018FFC] gap-4 items-center rounded-md cursor-pointer" data-aos="fade-up-right">
            <Image src = {caricon} alt = "caricon" />
            <h2 className=" font-Oswald text-[18px] md:text-[24px] font-medium text-white">Oil Change</h2>
            </div>
               <ServicesSection name="Oil Change" />
               <ServicesSection name="Replace Alternator"/>
               <ServicesSection name="Replace Battery"/>
               <ServicesSection name="Brake Replacement"/>
               <ServicesSection name="Replace gears"/>
            </div>
            <div className=" w-[97%]  md:w-3/4 lg:w-1/3" data-aos="fade-up">
          <Image src ={serviceshero} alt="servicesHero" className=" w-full h-full"/>
            </div>

            <div className=" w-[97%] md:w-3/4 lg:w-1/3" data-aos="fade-up-left">
                <h1 className=" text-[35px] tracking-tight font-Oswald font-semibold md:text-[40px] leading-10">Discover the secrets to a smoother ride!</h1>
                <p className=" font-Roboto leading-5 my-6">Discover the secrets to a smoother ride! From routine upkeep to pro tips, our site offers comprehensive guidance on car maintenance, ensuring your vehicle stays in peak condition
                </p>
                <p className=" font-Roboto leading-5"> Discover the secrets to a smoother ride! From routine upkeep to pro tips, our site offers comprehensive guidance on car maintenance, ensuring your vehicle stays in peak condition</p>
                <button className=" bg-[#018FFC] text-white mt-8 py-3 px-6 font-Roboto font-medium hover:bg-[#045fa5] rounded-md">Book Now</button>
            </div>

            </div>
        </div>
        
        </>
    )
}

export function ServicesSection(props){

    return(
        <>
          <div className=" servicesDiv flex p-[13px]  bg-[#ffffff] gap-4 items-center rounded-md"  data-aos="fade-up-right">
            <Image src = {caricon1} alt = "caricon" className=" servicesDivImg" />
            <h2 className=" sh2 font-Oswald text-[18px] md:text-[24px] font-medium ">{props.name}</h2>
            </div>
        
        </>
    )
}