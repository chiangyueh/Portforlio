import React,{FC} from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
interface Props{
  pageInfo: PageInfo
}
const About:FC<Props> = ({pageInfo}) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen  flex flex-col relative text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
        	initial={{
            x:-200,
            opacity:0
          }}
          transition={{
            duration : 1.2
          }}
          whileInView={{
            x:0,
            opacity : 1
          }}
          viewport={{
            once:true
          }}
        	src={urlFor(pageInfo.profilePic).url()}
          className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
          md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>
            我是{' '} 
          <span className='underline decoration-[#F7Ab0A]/50'>
            蔣岳 
          </span>{' '}
           歡迎你來到我的網站</h4>
           <span className='text-sm'>
            {pageInfo.backgroundInformation}
           </span>
        </div>
    </motion.div>
  )
}

export default About