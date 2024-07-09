import Image from "next/image"
import processbg from '../../../public/Images/processbg.png';
import circle1 from '../../../public/Images/circle1.png';
import circle1border from '../../../public/Images/circleborder.png';
import quote from '../../../public/Images/quote.png';
import skyvector from '../../../public/Images/vector1.png';
import bluecircle from '../../../public/Images/bluecircle.png';
import bluecircleborder1 from '../../../public/Images/bluecircleborder1.png';
import bluevector from '../../../public/Images/bluevector.png';
import greencircle from '../../../public/Images/greencircle.png';
import greencircleborder from '../../../public/Images/greencircleborder.png';
import greenvector from '../../../public/Images/greenvector.png';
import mechanic from '../../../public/Images/mechanic.png';
import money from '../../../public/Images/money.png';

export default function Process()
{
    return(
        <>

        <div className="flex flex-col items-center justify-center  relative pt-12 md:pt-28">
          
               <Image src={processbg} alt="proceesBackgroundImage" className=" absolute top-0 h-full w-full   "/>
            

            <div>
                <h1 className="font-Oswald text-[34px] md:text-[40px] font-semibold leading-snug tracking-tight"> How it works</h1>
            </div>
            {/* The div which is holding all the data */}
            <div className=" flex lg:gap-10 lg:py-24 py-8 flex-col gap-12 lg:flex-row">
                {/* this div is holding singal card */}

         <div  data-aos="fade-down-right">
            <div className="  flex gap-4 lg:flex-row flex-col items-center justify-center lg:justify-normal lg:items-start">
                 <div className=" bg-[#018FFC] w-[59px] h-[59px] rounded-full flex items-center justify-center text-white font-bold text-[18px]">01</div>
                 <div className="text-center lg:text-left">
                  <h3 className=" text-[22px] md:text-[24px] font-Oswald font-semibold leading-8">Get Fixed Qoute in 5 mins</h3>
                  <p>Fixed upfront qoute that does not change</p>
                  </div>
            </div>
            <div className="ml-12 -my-4 hidden xl:block">
                <Image src={skyvector} />
            </div>

            <div className=" relative flex items-center justify-center lg:items-start lg:justify-normal mt-5 xl:pl-14 xl:-my-10 ">
            <Image src={circle1border}/>
                <div className=" absolute xl:top-[1.52rem] xl:left-[5rem] lg:top-[1.2rem] lg:left-[1.5rem] ">
                <Image src={circle1} alt="circle1"/>
                <div className="absolute top-9 left-10"><Image src={quote} alt = "icon"></Image></div>
                </div>
              
            </div>
            </div>







              {/* this div is holding singal card */}
         <div data-aos="fade-down-right">
            <div className="  flex gap-4 lg:flex-row flex-col items-center justify-center lg:justify-normal lg:items-start">
                 <div className=" bg-[#0058E6] w-[59px] h-[59px] rounded-full flex items-center justify-center text-white font-bold text-[18px]">02</div>
                 <div className="text-center lg:text-left">
                  <h3 className="text-[22px] md:text-[24px] font-Oswald font-semibold leading-8">Mechanic comes to you</h3>
                  <p>Fixed upfront qoute that does not change</p>
                  </div>
            </div>
            <div className="ml-12 -my-4 hidden xl:block">
                <Image src={bluevector} className="hidden xl:block"/>
            </div>

            <div className=" relative   flex items-center justify-center lg:justify-normal lg:items-start xl:-mx-12 xl:-my-9 mt-5 ">
            <Image src={bluecircleborder1}/>
                <div className=" absolute lg:top-[1.3rem] lg:left-[1.3rem]">
                <Image src={bluecircle} alt="circle1"/>
                <div className="absolute top-9 left-10"><Image src={mechanic} alt = "icon"></Image></div>
                </div>
              
            </div>
            </div>





              {/* this div is holding singal card */}
         <div data-aos="fade-down-right">
            <div className=" flex gap-4 lg:flex-row flex-col items-center justify-center lg:justify-normal lg:items-start">
                 <div className=" bg-[#22A960] w-[59px] h-[59px] rounded-full flex items-center justify-center text-white font-bold text-[18px]">03</div>
                 <div className=" text-center lg:text-left">
                  <h3 className="text-[22px] md:text-[24px] font-Oswald font-semibold leading-8">Pay after the service</h3>
                  <p>Fixed upfront qoute that does not change</p>
                  </div>
            </div>
            <div className="ml-12 -my-4 hidden lg:block">
                <Image src={greenvector} className="hidden xl:block"/>
            </div>

            <div className=" relative flex items-center justify-center lg:justify-normal lg:items-start  xl:-mx-12 xl:-my-10 mt-8">
            <Image src={greencircleborder}/>
                <div className=" absolute lg:top-[1.3rem] lg:left-[1.34rem]">
                <Image src={greencircle} alt="circle1"/>
                <div className="absolute top-9 left-10"><Image src={money} alt = "icon"></Image></div>
                </div>
              
            </div>
            </div>


            </div>








        </div>
        
        
        </>
    )
}