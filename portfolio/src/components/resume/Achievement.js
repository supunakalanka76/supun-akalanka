import React from 'react'
import {motion} from 'framer-motion'
import ResumeCard from './ResumeCard'

function Achievement() {
  return (
    <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1, transition:{duration:0.5}}} 
        className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 pb-10'>
        <div>
        <div className='mt-10 py-6 lgl:py-12 font-poppins'>
            <p className='text-sm text-designColor tracking-[4px]'>Features</p>
            <h2 className='text-3xl md:text-4xl font-bold'>Academic Achievements</h2>
        </div>

        <div className='mt-6 lgl:mt-14 w-full lgl:h-[1000px] border-l-[6px] border-bgBlack border-opacity-30 flex flex-col gap-10'>

            <ResumeCard 
                title='Certificate of Participation - Innovative with Ballerina Coding Challenge'
                subTitle='IEEE Student Branch of UOM collaborate with WSO2. (2024 Sep - 2024 Nov)'
            />

            <ResumeCard 
                title='Advanced Certificate in Spoken English'
                subTitle='Britishway English Academy - Kurunegala (2023 Feb - 2023 May)'
            />

            <ResumeCard 
                title='General Certificate of Education (Advanced Level)'
                subTitle='S.W.R.D. Bandaranayake College, Panduwasnuwara (2019 - 2023)'
            />

            <ResumeCard 
                title='General Certificate of Education (Ordinary Level)'
                subTitle='S.W.R.D. Bandaranayake College, Panduwasnuwara (2017 - 2019)'
            />
        </div>
        </div>
        <div>
            <div>
                <div className='mt-10 py-20 lgl:py-12 font-poppins'>
                    <p className='text-sm text-designColor tracking-[4px]'>Features</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Professional Achievements</h2>
                </div>

                {/* <div className='mt-6 mb-10 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-bgBlack border-opacity-30 flex flex-col gap-10'>
                <ResumeCard 
                    title='BEng (Hons) in Software Engineering (TOP UP)'
                    subTitle='London Metropolitan University - UK (2025 - 2026)'
                />

                <ResumeCard 
                    title='BTEC Level 5 HND in Computing Software Engineering'
                    subTitle='Pearson University - UK (2023 - 2024)'
                    des='BTEC Level 5 Higher National Diploma in Computing specialization in Software Engineering'
                />

                <ResumeCard 
                    title='General Certificate of Education (Advanced Level)'
                    subTitle='S.W.R.D. Bandaranayake College, Panduwasnuwara (2019 - 2023)'
                />

                <ResumeCard 
                    title='General Certificate of Education (Ordinary Level)'
                    subTitle='S.W.R.D. Bandaranayake College, Panduwasnuwara (2017 - 2019)'
                />
                </div> */}
            </div>
        </div>
    </motion.div>
  )
}

export default Achievement
