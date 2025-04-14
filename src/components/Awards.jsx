import React from 'react'
import { Trophy, Award, Medal } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Awards = () => {
    const awards = [
        {
            title: "Robert J. Tiffin Student Leadership Award",
            organization: "York University",
            year: "2022",
            description: "Awarded to 11 out of 55,000+ students for impactful leadership at York.",
            icon: <Trophy className="w-8 h-8" />,
            link: "https://www.yorku.ca/yfile/2023/08/11/recognizing-student-influence-robert-j-tiffin-student-leadership-award-winners/"
        },
        {
            title: "Innovation Award",
            organization: "C4 Capstone Project",
            year: "2023",
            description: "Earned for ALIGN, an LLM-powered tool improving global, multilingual academic search.",
            icon: <Award className="w-8 h-8" />,
            link: "https://www.linkedin.com/posts/prabhjeesingh_i-am-thrilled-to-announce-that-our-team-activity-7108578331989614592-ukwQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwEfO4B0zYEJ_bZq-iQ8_zl7vtb2C4SvS4"
        },
        {
            title: "John Stefanson Student Involvement Award",
            organization: "Lassonde School of Engineering",
            year: "2024",
            description:
                "1 of 6000+ students recognized for outstanding Leadership involvement as President of student associations.",
            icon: <Medal className="w-8 h-8" />,
            link: ""
        },
    ]

    return (
        <>
            {/* Awards Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >

                <h3 className="mb-8 font-bold text-white text-2xl text-center">
                    My <span className="text-amber-400">Awards</span>
                </h3>

                <div className="gap-6 grid md:grid-cols-3">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <a
                                href={award.link}
                                target='_blank'
                                rel="noopener noreferrer"
                                className="block h-full"
                            >
                                <div className="flex flex-col bg-gradient-to-b from-amber-900/20 to-gray-900 p-6 border border-amber-400/10 hover:border-amber-400/30 rounded-xl h-full transition-all">
                                    <div className="flex flex-col flex-grow items-center">
                                        <div className="mb-4 text-amber-400">{award.icon}</div>
                                        <h4 className="mb-2 font-semibold text-white text-lg text-center">{award.title}</h4>
                                        <div className="flex justify-center items-center space-x-2 mb-3 text-amber-400 text-sm">
                                            <span>{award.organization}</span>
                                            <span>•</span>
                                            <span>{award.year}</span>
                                        </div>
                                        <p className="text-gray-400 text-sm text-center">{award.description}</p>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    )
}

export default Awards