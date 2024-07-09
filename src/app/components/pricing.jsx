import Image from "next/image";
import pricinghero from '../../../public/Images/pricinghero.png';
import pricingblack from '../../../public/Images/pricingblack.png';
import pricingIcon from '../../../public/Images/pricingIcon.png';
import pricingIcon2 from '../../../public/Images/pricingicon2.png';
import pricingtik from '../../../public/Images/pricingtik.png';
export default function Pricing()
{
    return(
        <>
        <div className="relative py-16 flex items-center justify-center flex-col">
            <Image src={pricinghero} alt="pricinghero" className=" absolute top-0 -z-20 w-full h-full"/>
            <Image src={pricingblack} alt="pricinblack" className=" absolute top-0 -z-20 w-full h-full"/>

            <h1 className=" text-white font-Oswald font-semibold text-[40px]">Pricing</h1>

            <div className="flex gap-7 mt-7 md:flex-row flex-col">
                <PricingCard name=" Gas Engine" image = {pricingIcon}/>
                <PricingCard name = "Diesel Engine" image = {pricingIcon2}/>
               
            </div>

        </div>
        </>
    )
}


export function PricingCard(props)
{
    return(
        <>
         <div className=" bg-white w-[275px] md:w-[300px] p-3 rounded-lg"  data-aos="fade-up"
     data-aos-duration="2000">
                    <Image src ={props.image} alt="icon" width={40} height={40}/>
                    <h2 className=" font-Oswald text-[20px] my-2 font-semibold">{props.name}</h2>
                    <h2 className=" font-Oswlad text-[24px] font-semibold text-[#0059E6] my-2">$100/Service</h2>
                    <h2 className=" font-Roboto  text-[18px] my-1">Billed every 6 months</h2>
                    <div className=" flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Image src={pricingtik} alt="check"/>
                          <p>Full Synthetic Oil Change</p>
                    </div>
                    <div className="flex gap-3">
                        <Image src={pricingtik} alt="check"/>
                          <p>Engine Air Filter</p>
                    </div>
                    <div className="flex gap-3">
                        <Image src={pricingtik} alt="check"/>
                          <p>Cabin Air Filter Tire Rotatiob</p>
                    </div>
                    <div className="flex gap-3">
                        <Image src={pricingtik} alt="check"/>
                          <p>Full Synthetic Oil Change</p>
                    </div>
                    </div>
                      

                      <div className="  bg-[#0059E61A] rounded-md my-4">
                        <p className=" text-[12px] font-Roboto">No hidden fees or high pressure sales. just on scedule auto mainance.</p>
                      </div>
                </div>
        </>
    )
}