import React from 'react'
import LeftHome from './LeftHome'
import RightHome from './RightHome'


function Home() {

  return (
    <section id='home' className='lgl:w-full pl-10 pr-10 pt-14 pb-10 flex flex-col gap-10 xl:gap-0 lgl:flex-row border-b-[2px] font-poppins border-b-designColor'>

      <LeftHome />

      <RightHome />
    </section>
  )
}

export default Home

