'use client';
import {useState} from 'react'
import GithubIcon from "../../../public/images/github-icon.svg"
import linkedinIcon from "../../../public/images/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

export const ContactSections = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [emailSubmited, setEmailSubmited] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true);

        const data = {
            email: e.currentTarget.email.value,
            subject: e.currentTarget.subject.value,
            message: e.currentTarget.message.value,
        }

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSONdata,
        };

        const request = await fetch(endpoint, options);
        console.log({request})
        const response = await request.json();
        console.log({response})
        if(response.success){
            console.log('Message sent')
            setEmailSubmited(true);
        }
        setLoading(false);
    }

    

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className='z-10'>
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
        <div className='z-10'>
            <form className='flex flex-col gap-4' action="" onSubmit={handleSubmit}>
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
                        className='bg-[#18191e] border-[#33353f] placeholder-[#aca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 min-h-[50px]'
                        name="message" 
                        id="message" 
                        cols={30} 
                        rows={5}
                        placeholder="Let's talk about..."
                    ></textarea>
                </div>

                <button
                    className='mt-2 w-full text-white font-medium py-2.5 px-5 rounded-lg bg-gradient-to-r from-blue-500 via-sky-500 to-blue-400'>
                    {
                        emailSubmited ? 
                        "Email sent successfully!" :
                        (loading ? "Sending..." : "Send Message") 

                    }
                </button>
                {
                    emailSubmited && (
                        <p>
                            Email sent successfully! 
                            I'll get back to you as soon as possible. 
                            Thank you for your time. 
                            <br />
                            <br />
                            <span className='text-sm text-[#ADB7BE]'>
                                - Jesús Milano
                            </span>
                        </p>
                    )
                }
            </form>
        </div>

    </section>
  )
}
