import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {event, pms, pos, portfolio, todo} from '../../assets/index'

function Projects() {
  return (
    <section id='projects' className='w-full pl-10 pr-10 py-24 border-b-[1px] border-b-designColor'>
      <div className='flex justify-center items-center text-center'>
        <Title
            title='Check Out My Work and Leave Your Feedback.'
            des='My Projects'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectCard 
          title='Pont Of Sales (POS) System'
          des='A POS (Point of Sale) System is a digital solution used by businesses to process sales transactions, manage inventory, and track customer data. It simplifies the payment process and enhances operational efficiency, making it an essential tool for retail and service industries.'
          src={pos}
        />
        <ProjectCard 
          title='Supun Akalanka | Personal Portfolio'
          des='A personal portfolio is a website that showcases an individual’s skills, projects, experience, and achievements. It serves as a digital resume, providing potential employers or clients with insights into the person’s expertise and creative abilities, helping them stand out in their field.'
          src={portfolio}
        />
        <ProjectCard 
          title='Payroll System'
          des='A Payroll System is software that automates the calculation of employee salaries, deductions, and tax withholdings, ensuring accurate and timely payments. It simplifies payroll management and helps organizations maintain compliance with tax regulations.'
          src={pms}
        />
        <ProjectCard 
          title='Gatherly | The Event Reminder'
          des='An Event Reminder is a notification tool that alerts users about upcoming events or deadlines, helping them stay organized and ensuring they don’t miss important dates.'
          src={event}
        />

        <ProjectCard
          title='Efficio | The ToDo App'
          des='Efficio is a task management app designed to help users organize, prioritize, and track their daily tasks. It offers features like due dates, reminders, subtasks, and progress tracking, making it easy to stay productive and meet deadlines efficiently.'
          src={todo}
        />
        {/* <ProjectCard />
        <ProjectCard /> */}
      </div>
    </section>
  )
}

export default Projects
