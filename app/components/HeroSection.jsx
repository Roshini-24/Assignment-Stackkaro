import React from 'react';
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section>
      <div className='container rounded-[30px] bg-gradient-to-b from-white'>
      <div className='grid grid-cols-1 px-0 lg:px-12 py-4 lg:grid-cols-2'>  
      <div className='col-span-1 place-self-center order-2 lg:order-1 font-sans text-center lg:text-left'>
      <h1 className='text-[#0A56F1] mb-4 text-2xl lg:text-4xl font-bold text-center lg:text-left'>Diversifying the Designs of Digital World</h1>
      <p className='text-[#36454F] text-sm lg:text-xl text-center lg:text-left font-bold'>Explorogent International Services Private Limited (EISPL) is one of the most famous companies in the sector of Web and Mobile Development. In the market, EISPL has a strong presence in providing quality services to its clients.</p>
      <br>
      </br>
      <p className='text-[#36454F] text-sm lg:text-xl text-center lg:text-left font-bold'>
        EISPL is convinced that one should diversify the offering, given the changing needs of the clients.
         That is why we engage in multiple projects and activities. We also possess knowledge in web development, 
         app development, UI/UX design, as well as digital marketing. </p>
      <button className='px-6 py-3 rounded-full mt-10 bg-[#E68F50] hover:bg-[#0A56F1] text-white font-semibold text-sm lg:text-lg'>&#x1F57E; Book a Call</button>   
      </div>
      <div className='Col-span-2 order-1 lg:order-2'>
        <Image
         src="/images/1.png"
         alt='first-image'
         layout='responsive'
         width={500}
         height={500}
         />
         </div>
      </div>
      <div className='place-self-center font-sans text-center mt-20'>
        <div className='font-sans text-center'>
          <p className='text-black text-sm lg:text-xl font-medium text-center'>In the realm of digital solutions, we offer expertise in</p>
        </div>
        <div className='grid grid-cols-2 px-0 lg:px-12 py-3 lg:grid-cols-5 text-center content-center place-self-center'>
          
            <button className='px-2 py-2 w-18 rounded-full m-3 border-2 border-[#0A56F1] text-[#0A56F1] bg-white font-extrabold'>Website Development</button>
          
          
            <button className='px-2 py-2 w-18 rounded-full m-3 border-2 border-[#0A56F1] text-[#0A56F1] bg-white font-extrabold'>App Development</button>
         
          
            <button className='px-2 py-2 w-18 rounded-full m-3 border-2 border-[#0A56F1] text-[#0A56F1] bg-white font-extrabold'>UI/UX Design</button>
          
          
            <button className='px-2 py-2 w-18 rounded-full m-3 border-2 border-[#0A56F1] text-[#0A56F1] bg-white font-extrabold'>Digital Marketing</button>
          
          
            <button className='px-2 py-2 w-18 rounded-full m-3 border-2 border-[#0A56F1] text-[#0A56F1] bg-white font-extrabold'>SEO optimization</button>
        
        </div>
        <div className='font-sans text-center'>
          <p className='text-black text-sm lg:text-xl text-center font-medium'>showcasing our proficiency across various facets of the digital platform </p>
        </div>
        <div className='font-sans text-center m-10 lg:m-24'>
          <h1 className='text-[#E68F50] text-xl lg:text-4xl text-center font-extrabold'>Stay Ahead!</h1>
          <h1 className='text-[#E68F50] text-xl lg:text-4xl text-center font-extrabold'>Launch Your Next Project with Stackkaroo</h1>
        </div>

      </div>
      </div>
    </section>
  );
};

export default HeroSection;
