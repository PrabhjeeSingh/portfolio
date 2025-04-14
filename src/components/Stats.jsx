import React from 'react'
import { Code, Award, Briefcase, Github } from "lucide-react"
import { motion } from "framer-motion"

const Stats = () => {
    const stats = [
        { num: "2+", of: "Years Experience", icon: <Briefcase className="h-5 w-5" /> },
        { num: "20+", of: "Projects", icon: <Github className="h-5 w-5" /> },
        { num: "100%", of: "Satisfaction", icon: <Award className="h-5 w-5" /> },
        { num: "10+", of: "Technologies", icon: <Code className="h-5 w-5" /> },
    ]
    return (
        <>
        {/* Stats Info */ }
        < div className = "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" >
        {
            stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-amber-400/30 transition-all"
                >
                    <div className="flex items-center justify-center md:justify-start mb-2 text-amber-400">
                        {stat.icon}
                    </div>
                    <div className="font-bold text-2xl text-white">{stat.num}</div>
                    <div className="text-gray-400 text-sm">{stat.of}</div>
                </motion.div>
            ))
        }
    </div >
    </>
    )

}

export default Stats