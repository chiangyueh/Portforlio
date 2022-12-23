import React from 'react'
import {DevicePhoneMobileIcon, EnvelopeOpenIcon} from "@heroicons/react/24/solid"
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
    name: string;
    email : string;
    subject : string;
    message : string;
  };
const Contact = () => {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => {
        window.location.href = `mailto:y456123u@gmail?subject=${data.subject}&
        body=Hi,我是${data.name}.${data.message} ${data.email}`
    });
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
        
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibod text-center'>
                我這裡有你所需要的！{" "}
                <span className="decoration-[#F7AB0A]/50 underline">與我聯繫</span>
            </h4>

            <div className='space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                    <DevicePhoneMobileIcon className='text-[#F7AB0A] h-8 w-8 animate-pulse'/>
                    <p className='text-2xl'>
                    0988280764
                    </p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeOpenIcon className='text-[#F7AB0A] h-8 w-8 animate-pulse'/>
                    <p className='text-2xl'>
                    y456123u@gmail.com
                    </p>
                </div>
            </div>

            <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={onSubmit}>
                <div className='flex space-x-2'>
                    <input {...register("name")} className='contactInput' type='text' placeholder='姓名'/>
                    <input {...register("email")} className='contactInput' type='email' placeholder='信箱'/>
                </div>
                <input {...register("subject")} className='contactInput' type='text' placeholder='主旨'/>
                <textarea {...register("message")} className='contactInput' />
                <button className='bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold
                text-lg'
                >提交</button>
            </form>
        </div>
    </div>
  )
}

export default Contact