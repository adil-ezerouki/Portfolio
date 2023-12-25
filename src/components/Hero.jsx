import React, { useRef } from 'react'
import img from '../assets/adil1.png'
import Typed from 'react-typed'

export default function Hero() {
  const typeTarget = useRef(null);
  console.log(new Typed)

  return (
    <div id='heroSection' className=''>
      <div className='flex lg:flex-row flex-col-reverse justify-between items-center'>
        <div id='leftPart' className=' lg:w-[50%] lg:text-left text-center flex flex-col gap-4 lg:items-start items-center'>
          <div className='flex gap-2'>
            <div className='bg-[#177771] w-20 h-3 rounded-lg'></div>
            <div className='bg-[#FF7F40] w-8 h-3 rounded-lg'></div>
          </div>
          <div id='nameANDprofession'>
            <div className='lg:text-5xl text-4xl'>
              I'm <span className='text-[#FF7F40]'>Adil</span> <span className='text-[#177771]'>Ezerouki</span>
            </div>


            <h1 className='lg:text-5xl text-4xl' ref={typeTarget}>
            <Typed 
                strings={[
                  "Front-end Dev",
                  "Back-end Dev",
                  "Full-stack Dev",
                ]}

                typeSpeed={100}
                backSpeed={100}
                loop
              
              />
            </h1>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem sapiente rerum aspernatur! Consequuntur in
            incidunt consequatur aspernatur aperiam molestiae autem rem
            corporis deleniti, ea facere consectetur blanditiis obcaecati
            nesciunt harum?</p>
          <div id='btns' className='flex lg:flex-row flex-col gap-4'>
            <button className='bg-[#177771] text-white px-6 py-3 rounded-full' type='button'>DOWNLOAD CV</button>
            <button className='border border-[#177771] text-[#177771] px-6 py-3 rounded-full' type='button'>VIEW PORTFOLIO</button>
          </div>
        </div>
        <div id='rightPart' className=''>
          <img src={img} alt="adil picture" className='' />
        </div>
      </div>
    </div>
  )
}
