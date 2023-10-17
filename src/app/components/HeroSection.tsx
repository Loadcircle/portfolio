"use client"
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import helloAnimation from "../../../public/lotties/hello-lottie.json"
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { CoolButton } from "./CoolButton";

export const HeroSection = () => {
     
    return (
        <section className="md:py-16 pt-5">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-5xl lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text default-gradient">
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
                    <p className="text-base text-base mb-6 sm:text-lg lg:text-xl">
                    Hi, I’m Yisus - a software developer based out of Lima with 7 years of experience in the software industry.
                    </p>
                    <div className="sm:flex">
                        <Link href={'#contact'} className="inline-block mb-4 sm:mb-0 px-6 py-3 w-full sm:w-fit rounded-full mr-4 default-gradient transition-shadow duration-500 hover:shadow-[4px_4px_7px_0px_#4444f2]">
                            Contact Me
                        </Link>
                        <CoolButton Icon={ArrowDownTrayIcon}>
                            Download CV
                        </CoolButton>
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
