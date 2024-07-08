
import Image from "next/image";
import memberimg from '../../../public/Images/memberimg.png';
import memberhero from '../../../public/Images/memberhero.png';
export default function Member()
{
    return(
        <>
        <div className=" relative py-20">
            <Image src={memberimg} alt = "memberbg" className=" absolute top-0 w-full h-full -z-20"/>
            <div className="flex items-center justify-around md:flex-row flex-col">
                <div className=" w-[97%] md:w-1/3 ml-12">
                    <h1 className=" text-[35px] md:text-[40px] font-Oswald font-semibold">Why Become a Member</h1>
                    <p className="font-Roboto my-5 w-11/12">Discover the secrets to a smoother ride! From routine upkeep to pro tips, our site offers comprehensive guidance on car maintenance, ensuring your vehicle stays in peak condition.</p>
                    <button className=" bg-[#018FFC] text-white py-3 px-6 font-Roboto font-medium hover:bg-[#045fa5] rounded-md">Take a membership now</button>
                </div>
                <div className=" w-[97%] md:w-2/5">
                    <Image src={memberhero} alt="memberhero"/>
                </div>
            </div>
        </div>
        
        </>
    )
}

