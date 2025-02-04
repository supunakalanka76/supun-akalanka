import React from 'react'

function ResumeCard({title, subTitle, des}) {
  return (
    <div className='w-full lgl:h-1/4 group flex'>
      <div className='lgl:w-10 sm:w-10 lgl:h-[6px] bgOpacity mt-16 relative'>
        <span className='absolute lgl:w-5 lgl:h-5 sm:w-5 sm:h-5 rounded-full top-2 left-2 flex justify-center items-center bg-bgBlack bg-opacity-60'>
            <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'></span>
        </span>

      </div>
      <div className='w-full bg-bgBlack bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne'>

        <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center font-poppins'>
            <div>
                <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300'>
                    {title}
                </h3>
                <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>
                    {subTitle}
                </p>
            </div>
            {/* <div>
                <p className='px-4 py-2 w-25 h-10 text-designColor bg-bgBlack bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium'>
                    
                </p>
            </div> */}
        </div>
        <div>
            <p className='text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>
                {des}
            </p>
        </div>
     </div>
</div>
  )
}

export default ResumeCard
