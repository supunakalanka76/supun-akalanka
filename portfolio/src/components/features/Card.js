import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'

function Card({title, des, icon}) {
  return (
    <div className='w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-bgBlack hover:to-[#1e2024] transition-colors duration-100 group'>
      <div className='h-72 overflow-y-hidden'>
        <div className='flex h-full flex-col gap-10 translate-y-14  group-hover:translate-y-0 transition-transform: duration-500'>
            <div className='w-10 h-8 flex flex-col justify-between'>
                {icon ? (
                    <span className='text-5xl text-designColor'>{icon}</span>
                ): (
                    <>
                    <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                    <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                    <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                    <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                    </>
                )}
            </div>
            <div className='flex flex-col gap-6'>
                <h2 className='md:text-xl xl:text-2xl font-poppins font-bold text-gray-200'>
                    {title}
                </h2>
                <p className='base lgl:pt-0 pt-5'>{des}</p>
                <span className='text-2xl text-designColor'>
                    <FaArrowCircleRight />
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
