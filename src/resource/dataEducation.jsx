import React from 'react'
import { GraduationCap } from 'lucide-react'
import yorkwhite from '../assets/yorkwhite.png'
import dps from '../assets/dpslogo.jpeg'

const dataEducation = [
    {
        title: "Bachelor of Science Honours in Computer Science",
        company: "York University",
        date: "SEP 2020 - Dec 2024",
        details: [
            "Specialization in Artificial Intelligence and Machine Learning",
            "Relevant coursework: Data Structures & Algorithms, Machine Learning, Neural Networks, Database Systems, Web Development",
        ],
        side: "left",
        icon: <img src={yorkwhite} alt="York University" className="h-5 w-5" />,
    },
    {
        title: "Secondary Education",
        company: "Delhi Public School (D.P.S)",
        date: "",
        details: [
        ],
        side: "right",
        icon: <img src={dps} alt="York University" className="h-5 w-5" />,
    },
]

export default dataEducation