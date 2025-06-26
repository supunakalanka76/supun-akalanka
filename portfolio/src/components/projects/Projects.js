import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {event, pos, portfolio, chatbot} from '../../assets/index'

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
          title='IslandWhiz | AI Chatbot for Tourism in Sri Lanka'
          des='IslandWhiz is an AI-powered chatbot designed to assist tourists visiting Sri Lanka by providing real-time travel information, personalized recommendations, and cultural insights. Built using Rasa, Flask, and NLP, it aims to enhance travel experiences with intelligent conversation.'
          src={chatbot}
        />
        <ProjectCard 
          title='Gatherly | The Event Reminder'
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
