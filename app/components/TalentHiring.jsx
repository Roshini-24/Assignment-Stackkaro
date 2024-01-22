import React from 'react'

const TalentHiring = () => {
    return (
        <div className="m-auto mx-3 mb-20 lg:mx-6 px-4" >
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3">
                {
                    Data.map((d) =>(
                        
                        <div className="h-[210px] lg:h-[330px] m-1 lg:m-5 bg-white border-[2px] shadow-xl rounded-[20px]">
                         <div className=" rounded-t-xl justify-center flex px-5 lg:px-10 items-center"> 
                            <img src={d.img} alt="pic" className="h-10 lg:h-20 w-10 lg:w-20 m-3 lg:m-5 "/>
                            
                         </div>
                         <div className="rounded-t-xl flex justify-center px-5 lg:px-10 items-center">
                         <p className=" text-lg lg:text-2xl text-center font-bold text-[#0A56F1]">{d.title}</p>
                         </div>


                         <div className="flex flex-col justify-center items-center gap-3 p-1">
                            <p className="text-sm lg:text-lg font-semibold text-center text-[#36454F]">{d.content}</p>
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
          img:"/images/h1.png",  
          title: "Unleashing Top Talent Globally",
          content: "We offer 5% top talents and supports companies hiring from various time zones.",
        
        },
        {
            img:"/images/h2.png", 
          title: "Securing Success",
          content: "The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.",
          
        },
        {
            img:"/images/h3.png", 
          title: "Beyond Borders",
          content: " We provide both, flexible full-time and part-time jobs.",
          
        },
        {
            img:"/images/h4.png", 
          title: "End-to-End Excellence",
          content: " In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.",
          
        },
        {
            img:"/images/h5.png", 
          title: "Efficiency Redefined",
          content: "The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.",
          
        },
        {
            img:"/images/h6.png", 
          title: "Simplified-Contracts Satisfied-Partnerships",
          content: "The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.",
          
        },
      ];
export default TalentHiring
