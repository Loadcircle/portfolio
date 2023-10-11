import React from 'react'
import GithubIcon from "../../../public/images/github-icon.svg"
import linkedinIcon from "../../../public/images/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

export const ContactSections = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>
                Contactame
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Maiores consequatur rem, qui consequuntur est velit optio 
                quidem itaque eos aliquam odio dicta accusamus, soluta natus, 
                fugiat impedit ex architecto porro?
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/Loadcircle" target='_blank'>
                    <Image
                        src={GithubIcon}
                        alt='github icon'
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/jes%C3%BAs-milano/" target='_blank'>
                    <Image
                        src={linkedinIcon}
                        alt='linked-in icon'
                    />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col gap-4' action="">
                <div>                    
                    <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email' 
                        required 
                        placeholder='johndoe@domain.com' 
                        className='bg-[#18191e] border-[#33353f] placeholder-[#aca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                        
                </div>
                <div>
                    <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                    <input 
                        type="text" 
                        id='subject' 
                        name='subject' 
                        required 
                        placeholder='Just saying hi' 
                        className='bg-[#18191e] border-[#33353f] placeholder-[#aca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                </div>
                <div>
                    <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Message</label>
                    <textarea
                        className='bg-[#18191e] border-[#33353f] placeholder-[#aca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        name="message" 
                        id="message" 
                        cols={30} 
                        rows={5}
                        placeholder="Let's talk about..."
                    ></textarea>
                </div>

                <button
                    className='mt-2 w-full text-white font-medium py-2.5 px-5 rounded-lg bg-gradient-to-r from-blue-500 via-sky-500 to-blue-400'>
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}
