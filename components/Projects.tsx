import React,{FC} from 'react'
import {motion} from "framer-motion"
import { Project } from '../typings'
import { urlFor } from '../sanity'
interface Props{
    projects : Project[]
}
const Projects:FC<Props> = ({projects}) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileHover={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left 
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x scrollbar 
        snap-mandatory z-20'>
            {
                projects.map((project)=>(
                    <div className='w-screen h-screen flex-shrink-0 flex flex-col space-y-5
                    items-center justify-center p-20 md:p-44 snap-center' key={project._id}>
                        <motion.img 
                        initial={{opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}}
                        src={urlFor(project?.image).url()} alt="案例學習"/>
                        <div>
                            <h4 className=' text-4xl text-center'>{project.title}</h4>
                            <p className='text-center md:text-left'>
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects