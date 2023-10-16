"use client"
import Image from "next/image"
import aboutImage from "../../../public/images/about-image.jpg"
import { useState } from "react"
import { TabButton } from "./TabButton"

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
        ]
    },
    {
        title: "Experience",
        id: "experience",
        content: [
            "Job 1",
            "Job 2",
            "Job 3"
        ]
    },
]

export const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    
    const handleTabChange = (tab: string) => {
        setTab(tab);
    }

    return (
        <section className="text-white ">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image 
                    src={aboutImage}
                    alt="Image"
                    width={500}
                    height={500}
                />
                <div className="mt-5 md:mt-0">
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-base lg:text-lg">
                        I am an experienced self-taught software developer with over 6 years of professional experience. 
                        <br />
                        I have a particular affinity for frontend development, with a strong focus on JavaScript with ReactJs and CSS. 
                        I have extensive experience working with major JavaScript libraries and frameworks
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton active={tab === "skills"} selectTab={()=>handleTabChange("skills")}>
                            Skills
                        </TabButton>
                        <TabButton active={tab === "experience"} selectTab={()=>handleTabChange("experience")}>
                            Experience
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        <ul>
                            {
                                TAB_DATA.find(data => data.id === tab)?.content.map(e=>(
                                    <li key={e}>
                                        {e}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
