import React from 'react'
import Title from '../layouts/Title'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'


function Contact() {

  return (
    <section id='contact' className='w-full pl-10 pr-10 py-20 border-b-[1px] border-b-designColor mb-10'>
        <div className='flex justify-center items-center text-center'>
            <Title title='contact' des='Contact With Me'/>
        </div>
        <div className='w-full'>
            <div className='w-full h-auto flex flex-col lgl:flex-row justify-between gap-10'>
                <ContactLeft />

                <ContactRight />
            </div>
        </div>
    </section>
  )
}

export default Contact
