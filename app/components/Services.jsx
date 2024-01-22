import React from 'react'
import {HiCheckCircle} from "react-icons/hi";


const Services = () => {
  return (
    <div className='m-0 lg:my-16 mx-0'>
      <div className='container rounded-[30px] bg-gradient-to-b from-white'>
    <div className='font-extrabold text-2xl lg:text-4xl text-[#E68F50] text-center pt-10 pb-5 font-sans'>  
        <h1>SEO Services</h1>
    </div>
      <div className='grid grid-cols-1 px-0 lg:px-10 py-4 lg:grid-cols-2 text-center lg:text-left '> 
         <div className='p-1 lg:p-5 '>
            <div className='flex text-left'><HiCheckCircle className='text-[#36454F] size-7 m-6 mt-0 mb-0'/><p className='font-bold text-[#0A56F1] text-lg lg:text-2xl font-sans'>Customized SEO Services</p></div>
            <p className='pl-0 lg:pl-20 text-[#36454F] text-sm lg:text-lg mt-1 lg:mt-4 font-sans font-bold' >We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business.</p>
         </div>
         <div className='p-2 lg:p-5'>
            <div className='flex '><HiCheckCircle className='text-[#36454F] size-7 m-6 mt-0 mb-0'/><p className='font-bold text-[#0A56F1] text-lg lg:text-2xl font-sans'>Mobile SEO Services</p></div>
            <p className='pl-0 lg:pl-20 text-[#36454F] text-sm lg:text-lg mt-1 lg:mt-4 font-sans font-bold' >We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices.</p>
         </div>
         <div className='p-2 lg:p-5'>
            <div className='flex '><HiCheckCircle className='text-[#36454F] size-7 m-6 mt-0 mb-0'/><p className='font-bold text-[#0A56F1] text-lg lg:text-2xl font-sans'>On-Page SEO Services</p></div>
            <p className='pl-0 lg:pl-20 text-[#36454F] text-sm lg:text-lg mt-1 lg:mt-4 font-sans font-bold' >We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.</p>
         </div>
         <div className='p-2 lg:p-5'>
            <div className='flex text-left '><HiCheckCircle className='text-[#36454F] size-7 m-6 mt-0 mb-0'/><p className='font-bold text-[#0A56F1] text-lg lg:text-2xl font-sans'>Free Website Audit and Strategies</p></div>
            <p className='pl-0 lg:pl-20 text-[#36454F] text-sm lg:text-lg mt-1 lg:mt-4 font-sans font-bold' >We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services.</p>
         </div>
         <div className='p-2 lg:p-5'>
            <div className='flex '><HiCheckCircle className='text-[#36454F] size-7 m-6 mt-0 mb-0'/><p className='font-bold text-[#0A56F1] text-lg lg:text-2xl font-sans'>Off-Page SEO Services</p></div>
            <p className='pl-0 lg:pl-20 text-[#36454F] text-sm lg:text-lg mt-1 lg:mt-4 font-sans font-bold' >We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel.</p>
         </div>
         
      </div>
      </div>
      <div className='font-sans text-center m-10 mb-1 lg:m-16 lg:mb-2'>
          <h1 className='text-[#E68F50] text-xl lg:text-4xl text-center font-extrabold'>Stackkaroo’s Talent Hiring & Job Placement Services</h1>
          </div>
        <div className='font-sans text-center px-0 mt-1 lg:mt-8'>
          <p className='text-[#36454F] text-sm lg:text-xl text-center font-bold px-0'>We are a talent searching platform that redesigns how companies hire talents. It is a cost-effective solution for industries. We also provide global job opportunities with good salaries, support, and professional development. </p>
        </div>


    </div>
  )
}

export default Services
