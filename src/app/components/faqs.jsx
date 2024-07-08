"use client"
import { faq , faq1} from "./faqdata";
import Image from "next/image";
import plus from '../../../public/Images/questionPlus.png';
import minus from '../../../public/Images/minus.png';
import { useState, useEffect } from "react";

export default function Faqs(){
    
    let[clickedid , setClickedId] = useState(null); 
    
    let clicked = (event)=>{
     
        const id = event.currentTarget.id;
        setClickedId(prevId => (prevId === id ? null : id)); // Toggle between the current id and null
        console.log("I am clicked");
    }

    useEffect(() => {
        if (clickedid !== null) {
            console.log(clickedid); 
        }
    }, [clickedid]);
    return(
        <>
        
        <div className=" bg-[#EBF4FF] py-12 md:py-20 flex items-center justify-center flex-col w-full">
            <h1 className=" text-[35px] tracking-tight md:text-[40px] font-Oswald leading-[50.9px] text-center font-semibold">frequently Asked Question's</h1>


            <div className=" flex w-4/5 cursor-pointer lg:flex-row flex-col items-center lg:items-start my-4">

           <div className="md:w-4/5 w-[97%]">

            {
                faq.map((value , index)=>{
                    return(
                    <div className="  px-4 w-full " key={value.id}>
                        <div className="bg-[white] flex justify-between p-5 my-4 gap-4">
                        <h1 className=" text-[14px] md:text-[16px]">{value.id} . {value.question}</h1>
                          <div>
                          <button onClick={clicked} id={value.id}>
                            {(value.id == clickedid)  ?
                             
                           <Image src={minus} alt="minusimage" width={20} height={20}/> :<Image src={plus} alt = "plusimage"/> }
                          
                        
                       
                          </button>  
                          </div>
                          </div>
                        <div className={`bg-white p-4 ${value.id == clickedid ? "block" : "hidden"}`}>
                           
                            <p className=" text-[14px] md:text-[16px]" id={value.id}>{value.answer}</p>
                        </div>
                    </div>
                    )

                })
            }
            </div>

                <div className=" md:w-4/5 w-[97%]">
           {
                faq1.map((value , index)=>{
                    return(
                    <div className="  px-4 w-full " key={value.id}>
                        <div className=" bg-[white] flex justify-between p-5 my-4 gap-4">
                        <h1 className=" text-[14px] md:text-[16px]">{value.id} . {value.question}</h1>
                          <div>
                          <button onClick={clicked} id={value.id}>
                            {(value.id == clickedid)  ?
                              
                           <Image src={minus} alt="minusimage" width={20} height={20}/> :<Image src={plus} alt = "plusimage"/> }
                          
                        
                       
                          </button>  

                          </div>
                          </div>
                        <div className={`bg-white p-4  ${value.id == clickedid ? "block" : "hidden"}`}>
                            <p className=" text-[14px] md:text-[16px]" id= {value.id}>{value.answer}</p>
                        </div>
                    </div>
                    )

                })
            }
               </div>

          </div>  

        </div>
        
        </>
    )
}