import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {event, pms, pos} from '../../assets/index'

function Projects() {
  return (
    <section id='projects' className='w-full pl-10 pr-10 py-20 border-b-[1px] border-b-designColor'>
      <div className='flex justify-center items-center text-center'>
        <Title
            title='Check Out My Work and Leave Your Feedback.'
            des='My Projects'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectCard 
            title='POS SYSTEM'
            des='A POS (Point of Sale) System is a digital solution used by businesses to process sales transactions, manage inventory, and track customer data. It simplifies the payment process and enhances operational efficiency, making it an essential tool for retail and service industries.'
            src={pos}
        />
        {/* <ProjectCard 
            title='EMPLOYEE MANAGEMENT SYSTEM'
            des='An EMS is a software tool that automates HR tasks like recruitment, attendance tracking, payroll, and performance management. It helps organizations efficiently manage employee information and streamline HR processes.'
            src={ems}
        /> */}
        <ProjectCard 
            title='PAYROLL SYSTEM'
            des='A Payroll System is software that automates the calculation of employee salaries, deductions, and tax withholdings, ensuring accurate and timely payments. It simplifies payroll management and helps organizations maintain compliance with tax regulations.'
            src={pms}
        />
        <ProjectCard 
            title='EVENT REMINDER'
            des='An Event Reminder is a notification tool that alerts users about upcoming events or deadlines, helping them stay organized and ensuring they don’t miss important dates.'
            src={event}
        />
        {/* <ProjectCard />
        <ProjectCard /> */}
      </div>
    </section>
  )
}

export default Projects
