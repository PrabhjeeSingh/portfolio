import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Award, Medal, Trophy } from "lucide-react"
import Cardv from "../components/Cardv"

const ExperiencePage = () => {
    const [activeTab, setActiveTab] = useState("work")

    // Work experience data
    const workExperience = [
        {
            title: "Technical Software Assistant",
            company: "York University Libraries",
            date: "SEP 2023 - PRESENT",
            details: [
                "Modernized legacy guest account software, enhancing usability by 35% and ensuring compatibility with outdated server constraints",
                "Developed Python scripts to automate inventory management, boosting operational efficiency by 80%",
                "Resolved server compatibility issues, reducing implementation time by 50%",
            ],
            side: "left",
            icon: <Briefcase className="h-5 w-5" />,
        },
        {
            title: "Data Science Research Assistant",
            company: "York University",
            date: "JAN 2025 - APR 2025",
            details: [
                "Designed and implemented an ETL pipeline to process Twitter data, including data cleaning and enrichment",
                "Automated 90% of the data extraction process, saving 15+ hours weekly",
                "Developed custom Python scripts for web scraping and API data retrieval",
            ],
            side: "right",
            icon: <Briefcase className="h-5 w-5" />,
        },
        {
            title: "Quality Assurance Analyst",
            company: "theScore",
            date: "SEP 2022 - APR 2023",
            details: [
                "Collaborated on a project developing a chat interface using OpenAI API to detect gambling issues through user behavior analysis",
                "Performed comprehensive QA testing across 10+ digital platforms, achieving 98% defect resolution",
                "Ensured full AODA compliance across all tested platforms",
            ],
            side: "left",
            icon: <Briefcase className="h-5 w-5" />,
        },
        {
            title: "Information Technology Assistant",
            company: "Lassonde School of Engineering",
            date: "MAY 2022 - AUG 2022",
            details: [
                "Troubleshot and resolved hardware and software issues with a 99% success rate",
                "Automated software installation processes, saving hours of manual work",
                "Managed service requests and incidents through a ticketing system, ensuring timely resolution",
            ],
            side: "right",
            icon: <Briefcase className="h-5 w-5" />,
        },
        {
            title: "Technology Sales Representative",
            company: "Staples Canada",
            date: "JAN 2022 - AUG 2022",
            details: [
                "Achieved $30,000 in sales over 2 months, providing expert advice on technical products",
                "Trained employees on IBM AS400 inventory management and customer relations",
            ],
            side: "left",
            icon: <Briefcase className="h-5 w-5" />,
        },
    ]

    // Education data
    const education = [
        {
            title: "Bachelor of Science in Computer Science",
            company: "York University",
            date: "SEP 2021 - APR 2025",
            details: [
                "Specialization in Artificial Intelligence and Machine Learning",
                "GPA: 3.8/4.0",
                "Relevant coursework: Data Structures & Algorithms, Machine Learning, Neural Networks, Database Systems, Web Development",
            ],
            side: "left",
            icon: <GraduationCap className="h-5 w-5" />,
        },
        {
            title: "Machine Learning Specialization",
            company: "Coursera (Stanford University)",
            date: "JUN 2023 - SEP 2023",
            details: [
                "Completed advanced coursework in supervised learning, neural networks, and deep learning",
                "Developed projects using TensorFlow and PyTorch",
                "Earned certification with distinction",
            ],
            side: "right",
            icon: <GraduationCap className="h-5 w-5" />,
        },
    ]

    // Awards data
    const awards = [
        {
            id: 1,
            title: "Dean's Honor Roll",
            organization: "York University",
            year: "2023",
            description: "Recognized for academic excellence with a GPA in the top 5% of the Computer Science department.",
            icon: <Trophy className="h-10 w-10" />,
        },
        {
            id: 2,
            title: "Hackathon Champion",
            organization: "YorkU Hacks",
            year: "2022",
            description:
                "First place winner for developing an AI-powered accessibility solution for visually impaired users.",
            icon: <Award className="h-10 w-10" />,
        },
        {
            id: 3,
            title: "Undergraduate Research Award",
            organization: "Lassonde School of Engineering",
            year: "2024",
            description: "Received funding for research on machine learning applications in natural language processing.",
            icon: <Medal className="h-10 w-10" />,
        },
    ]

    return (
        <div id="experience" className="min-h-screen bg-black py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h1 className="mb-4 text-4xl font-bold text-white">
                        My <span className="text-amber-400">Journey</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-gray-300">
                        A timeline of my professional experience, education, and achievements
                    </p>
                </motion.div>

                {/* Tab navigation */}
                <div className="mb-12 flex justify-center">
                    <div className="inline-flex rounded-full bg-gray-900 p-1">
                        <button
                            onClick={() => setActiveTab("work")}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "work" ? "bg-amber-400 text-black" : "text-gray-300 hover:text-white"
                                }`}
                        >
                            Work Experience
                        </button>
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "education" ? "bg-amber-400 text-black" : "text-gray-300 hover:text-white"
                                }`}
                        >
                            Education
                        </button>
                        <button
                            onClick={() => setActiveTab("awards")}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "awards" ? "bg-amber-400 text-black" : "text-gray-300 hover:text-white"
                                }`}
                        >
                            Awards
                        </button>
                    </div>
                </div>

                {/* Work Experience Timeline */}
                {activeTab === "work" && (
                    <div className="relative">
                        {/* Center line for desktop */}
                        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-amber-400 via-amber-400/50 to-transparent [@media(min-width:944px)]:block"></div>

                        <div className="space-y-8">
                            {workExperience.map((item, index) => (
                                <div key={index} className={`flex ${item.side === "left" ? "justify-start" : "justify-end"}`}>
                                    <div
                                        className={`w-full [@media(min-width:944px)]:w-5/12 ${item.side === "right" && "[@media(min-width:944px)]:ml-auto"}`}
                                    >
                                        <Cardv item={item} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education Timeline */}
                {activeTab === "education" && (
                    <div className="relative">
                        {/* Center line for desktop */}
                        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-amber-400 via-amber-400/50 to-transparent [@media(min-width:944px)]:block"></div>

                        <div className="space-y-8">
                            {education.map((item, index) => (
                                <div key={index} className={`flex ${item.side === "left" ? "justify-start" : "justify-end"}`}>
                                    <div
                                        className={`w-full [@media(min-width:944px)]:w-5/12 ${item.side === "right" && "[@media(min-width:944px)]:ml-auto"}`}
                                    >
                                        <Cardv item={item} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Awards Section */}
                {activeTab === "awards" && (
                    <div className="grid gap-8 md:grid-cols-3">
                        {awards.map((award) => (
                            <motion.div
                                key={award.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: award.id * 0.1 }}
                                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 transition-all hover:border-amber-400/30"
                            >
                                {/* Background glow effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-15"></div>

                                <div className="relative">
                                    <div className="mb-4 flex justify-center">
                                        <div className="rounded-full bg-amber-400/10 p-4 text-amber-400">{award.icon}</div>
                                    </div>

                                    <h3 className="mb-1 text-center text-xl font-bold text-white">{award.title}</h3>

                                    <div className="mb-3 flex items-center justify-center space-x-2 text-sm text-gray-400">
                                        <span>{award.organization}</span>
                                        <span>•</span>
                                        <span>{award.year}</span>
                                    </div>

                                    <p className="text-center text-gray-300">{award.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ExperiencePage
