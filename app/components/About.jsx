import React from 'react'
import Image from 'next/image';
import { ImUsers } from "react-icons/im";
import { TbUserSquareRounded } from "react-icons/tb";
import { MdFeedback } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa6";
import { BiSolidTime } from "react-icons/bi";

const About = () => {
  return (
    <section>
      <div className='container rounded-[30px] bg-gradient-to-b from-white'>
      <div className='grid grid-cols-1 px-0 lg:px-12 py-4 lg:grid-cols-2'>  
      <div className='col-span-1 place-self-center order-2 lg:order-1 font-sans text-center lg:text-left'>
      <h1 className=' text-[#E68F50] lg:text-[#0A56F1] mt-4 mb-4 text-2xl lg:text-4xl font-bold text-center lg:text-left'>Our Story</h1>
      <p className='text-[#36454F] text-sm lg:text-xl text-center font-bold lg:text-left'>Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra bring their extensive experience to the forefront as industry veterans. Our team is fueled by innovation, continually striving to exceed customer expectations.</p>
      <br>
      </br>
      <p className='text-[#36454F] text-sm lg:text-xl text-center font-bold lg:text-left'>
      Operating from our registered office in Agartala Sadar, Tripura (W), our company is officially registered with the Corporate Identification Number (CIN). Our active status and an authorized share capital of Rs 10.00 lac are a source of pride. </p>
      <button className='px-6 py-3 rounded-full mt-10 bg-[#0A56F1] lg:bg-[#E68F50]  hover:bg-slate-200 text-white font-semibold text-sm lg:text-xl'> &#x20B9; Get Estimated Project Cost</button>   
      </div>
      <div className='Col-span-2 order-1 lg:order-2'>
        <Image
         src="/images/2.png"
         alt='first-image'
         layout='responsive'
         width={800}
         height={800}
         />
         </div>
      </div>

      <div>
      <div className='font-sans text-center m-10 mb-1 lg:m-24 lg:mb-2'>
          <h1 className='text-[#E68F50] text-xl lg:text-4xl text-center font-extrabold'>Why Choose Us?</h1>
          </div>
        <div className='font-sans text-center px-0 lg:px-20'>
          <p className='text-[#36454F] text-sm lg:text-xl text-center font-bold px-0 lg:px-16'>We excel with reliability, innovation and customer-centric approach for our quality products.
Our dedicated team ensures that the solutions provided are dependable and long-term </p>
        </div>
        <div className='grid grid-cols-1  pt-0 lg:pt-16 lg:px-72 py:0 lg:py-3 lg:grid-cols-3 text-center content-center place-self-center'>
          
            <button className='px-2 py-2 w-18 flex rounded-[50px] lg:rounded-[20px] m-3 border-2 shadow-lg shadow-blue-500/40 border-[#dee0e4] text-[#0A56F1] bg-gradient-to-r from-[#a9b7d8] to-[#f1ebeb] font-extrabold'>
            <ImUsers className='text-[#36454F] size-8 lg:size-20 bg-white rounded lg:rounded-[20px] m-1 lg:m-3 mr-3'/><p className='justify-center m-2 lg:m-5'>User-Centric Approach</p></button>
          
            <button className='px-2 py-2 w-18 flex rounded-[50px] lg:rounded-[20px] m-3 border-2 shadow-lg shadow-blue-500/40 border-[#eff0f3] text-[#0A56F1] bg-gradient-to-r from-[#a9b7d8] to-[#f1ebeb] font-extrabold'>
                <TbUserSquareRounded className='text-[#36454F] size-8 lg:size-20 bg-white rounded lg:rounded-[20px] m-1 lg:m-3 mr-3'/><p className='justify-center m-2 lg:m-5 '>Customer Satisfaction</p></button>
         
            <button className='px-2 py-2 w-18 flex rounded-[50px] lg:rounded-[20px] m-3 border-2 shadow-lg shadow-blue-500/40 border-[#f6f6f8] text-[#0A56F1] bg-gradient-to-r from-[#a9b7d8] to-[#f1ebeb] font-extrabold'>
            <MdFeedback className='text-[#36454F] size-8 lg:size-20 bg-white rounded  lg:rounded-[20px] m-1 lg:m-3 mr-3' /><p className='justify-center m-2 lg:m-5'>Integrating Feedback</p></button>
        </div>  
        <div className='grid grid-cols-1 lg:px-96 py-3 pt-0 lg:grid-cols-2 text-center content-center place-self-center'> 
            <button className='px-2 py-2 w-18 flex  rounded-[50px] lg:rounded-[20px] m-3 border-2 shadow-lg shadow-blue-500/40 border-[#f6f7f9] text-[#0A56F1] bg-gradient-to-r from-[#a9b7d8] to-[#f1ebeb] font-extrabold'>
            <FaFolderOpen className='text-[#36454F] size-8 lg:size-20 bg-white rounded lg:rounded-[20px] m-1 lg:m-3 mr-3' /><p className='justify-center m-2 lg:m-5'>High Quality Products</p></button>
          
            <button className='px-2 py-2 w-18 flex rounded-[50px] lg:rounded-[20px] m-3 border-2 shadow-lg shadow-blue-500/40 border-[#fcfcfc] text-[#0A56F1] bg-gradient-to-r from-[#a9b7d8] to-[#f1ebeb] font-extrabold'>
            <BiSolidTime className='text-[#36454F] size-8 lg:size-20 bg-white rounded lg:rounded-[20px] m-1 lg:m-3 mr-3'/><p className='justify-center m-2 lg:m-5'>On-Time Product Delivery</p></button>
        
        </div>
      </div>
      <div>
      <div className='font-sans text-center m-10 mb-1 lg:m-16 lg:mb-2'>
          <h1 className='text-[#E68F50] text-xl lg:text-4xl text-center font-extrabold'>Stackkaroos Digital Services</h1>
          </div>
        <div className='font-sans text-center px-0 lg:px-20'>
          <p className='text-[#36454F] text-sm lg:text-xl text-center font-bold px-0 lg:px-16'>We excel with reliability, innovation and customer-centric approach for our quality products.
Our dedicated team ensures that the solutions provided are dependable and long-term </p>
        </div>





      </div>
      </div>
      </section>
  )
}

export default About
