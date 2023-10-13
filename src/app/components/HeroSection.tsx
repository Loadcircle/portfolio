"use client"
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import helloAnimation from "../../../public/lotties/hello-lottie.json"
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

export const HeroSection = () => {
    
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-5xl lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-sky-500 to-primary-400">
                            Hello, I&apos;m{""} 
                        </span> 
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Jesús',
                                1500, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web developer',
                                1500,
                                'Front-end Engineer',
                                1500,
                                'Software Developer',
                                1500
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Animi laboriosam nemo eaque nisi, numquam sint earum 
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-primary-500 via-sky-500 to-primary-400">Hire Me</button>
                        <button className="group px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-200 text-white hover:text-black border border-white mt-3">
                            <ArrowDownTrayIcon className="w-6 h-6 text-white inline-block mr-2 -mt-1 group-hover:text-black"/>
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Lottie animationData={helloAnimation} />                        
                    </div>
                </div>
            </div>
        </section>
    )
}
