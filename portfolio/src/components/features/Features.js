import React from 'react'
import Title from '../layouts/Title'
import { FaGlobe, FaDatabase,  } from 'react-icons/fa'
import { SiAntdesign, SiAdobephotoshop, SiAdobepremierepro} from 'react-icons/si'
import { BiLogoVisualStudio } from 'react-icons/bi';

import Card from './Card'

function Features() {
  return (
    <section id='features' className='w-full pl-10 pr-10 py-20 border-b-[1px] border-b-designColor'>

      <Title title='Features' des='Areas of Expertise' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
        <Card 
          title="Web Development"
          des="I develop responsive, user-friendly websites using HTML, CSS, and JavaScript, leveraging frameworks like React.js, Bootstrap, and backend tools."
          icon={<FaGlobe />}
        />

        <Card 
          title="Software Development"
          des="I excel in building software applications, using tools like VS Code, Microsoft Visual Studio, and various programming languages for efficient solutions."
          icon={<BiLogoVisualStudio />}
        />

        <Card 
          title="UI/UX Design"
          des="I create intuitive user interfaces and engaging experiences, using design tools like Figma, Sketch, and Adobe XD for seamless, user-centered solutions."
          icon={<SiAntdesign />}
        />

        <Card 
          title="Database design"
          des="I specialize in designing efficient database schemas and managing data, using tools like MySQL, SQL Server Management Studio, and MongoDB."
          icon={<FaDatabase />}
        />

        <Card 
          title="Graphics design"
          des="I create captivating and visually impactful designs, utilizing tools like Adobe Photoshop, Illustrator, and InDesign to deliver engaging visual content."
          icon={<SiAdobephotoshop />}
        />

        <Card 
          title="Video Editing"
          des="I excel in video editing, using tools like Adobe Premiere Pro and CapCut, collaborating with editors and producers to deliver polished, high-quality content."
          icon={<SiAdobepremierepro />}
        />

      </div>
    </section>
  )
}

export default Features
