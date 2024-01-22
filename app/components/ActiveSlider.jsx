import React from "react";
import {HiArrowCircleRight} from "react-icons/hi";

const ActiveSlider = () => {
  return (
    <div className="m-auto mx-3 lg:mx-10 px-4" >
        <div className="mt-4 lg:mt-20 grid grid-cols-1 lg:grid-cols-3">
            {
                Data.map((d,index) =>(
                    
                    <div key={index} className="border-[1px] lg:border-[2px] h-[200px] lg:h-[380px] border-white m-1 lg:m-5 bg-gradient-to-b from-[#e2f2fd]  rounded-[20px]">
                     <div className="rounded-t-xl flex justify-center px-5 lg:px-10 items-center"> 
                        <img src={d.img} alt="pic" className="h-7 lg:h-14 w-7 lg:w-14 m-3 lg:m-10 "/>
                        <p className=" text-lg lg:text-2xl font-bold text-[#0A56F1]">{d.title}</p>
                     </div>
                     <div className="flex flex-col justify-center items-center gap-3 p-4">
                        <p className="text-sm lg:text-xl font-semibold text-center text-[#36454F]">{d.content}</p>
                      </div>
                      <div className="p-4 mt-0 lg:m-auto">  
                        <HiArrowCircleRight className="text-[#E68F50] size-9 lg:size-12  "/>
                     </div>

                    </div>
                
                ))
            }

        </div>
        
    </div>
  )
}

const Data = [
    {
      img:"/images/4.1.png",  
      title: " Website Development",
      content: "We specialize in responsive website development, ensuring optimal performance across various devices.",
    
    },
    {
        img:"/images/4.2.png", 
      title: "App Development",
      content: "We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.",
      
    },
    {
        img:"/images/4.3.png", 
      title: "Software Development",
      content: " We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.",
      
    },
    {
        img:"/images/4.4.png", 
      title: "UI/UX Design",
      content: " We specialize in creating exemplary designs prioritizing user-friendly concepts and appealing interfaces.",
      
    },
    {
        img:"/images/4.4.png", 
      title: "Digital Marketing",
      content: "We specialize in tailored digital marketing solutions for problems and ensure online marketing strategies.",
      
    },
    {
        img:"/images/4.6.png", 
      title: "SEO Optimization",
      content: "We ensure optimal website traffic by addressing factors such as efficiency, user experience and Speed.",
      
    },
  ];

export default ActiveSlider
