import React from 'react'
import {motion} from 'framer-motion'
// import ResumeCard from './ResumeCard'

function Skills() {
  return (
    <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1, transition:{duration:0.5}}}
        className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 pb-10'>
        <div className='w-full lgl:w-1/2'>
        <div className='mt-10 py-6 font-poppins'>
            <p className='text-sm text-designColor tracking-[4px]'>Features</p>
            <h2 className='text-3xl md:text-4xl font-bold'>Design Expertise</h2>
        </div>
        <div className='mt-6 w-full flex flex-col gap-6'>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Photoshop</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[75%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>75%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Figma</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[95%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>95%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Cap Cut</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[80%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>80%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Adobe Premiere Pro</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[45%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>45%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Adobe Illustrator</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[40%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>40%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Canva</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[80%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>80%</span>
                    </motion.span>
                </span>
            </div>
            
        </div>
        </div>
        
        <div className='w-full lgl:w-1/2'>
            <div className='mt-10 py-6 font-poppins'>
                <p className='text-sm text-designColor tracking-[4px]'>Features</p>
                <h2 className='text-3xl md:text-4xl font-bold'>Development Expertise</h2>
            </div>
            <div className='mt-6 w-full flex flex-col gap-6'>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>HTML</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[95%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>95%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>CSS</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[85%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>85%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Java Script</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[70%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>70%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>React.JS</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[80%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>80%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Laravel</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[50%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>50%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Tailwind CSS</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[75%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>75%</span>
                    </motion.span>
                </span>
            </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Skills
