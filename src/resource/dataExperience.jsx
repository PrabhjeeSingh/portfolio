import React from 'react'
import { Briefcase } from 'lucide-react'
import libwhite from '../assets/libwhite.png'
import glenwhite from '../assets/glenwhite.png'
import penn from '../assets/penn2.png'
import thescore from '../assets/thescorelogo.jpeg'
import lassonde from '../assets/lassondewhite.png'
import staples from '../assets/stapleslogo.png'

const dataExperience = [
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
        icon: <img src={libwhite} className = "h-5 w-13" / > ,
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
        icon: <img src={glenwhite} className="h-5 w-13" /> ,
    }, 
    {
       
        title: "SOFTWARE DEVELOPER INTERN",
        company: "Penn Entertainment (formerly theScore)",
        date: "MAY 2024 - AUG 2024",
        details: [
            "Developed a mock payment provider using Elixir and Phoenix, streamlining load testing across multiple environments",
            "Created and integrated Datadog dashboards to monitor payment transaction performance, reducing transaction failures by 30%",
            "Enhanced REST API response configurations, improving test case diversity and performance by 20%"
        ],
        side: "left", 
        icon: <img src={penn} className="h-7 w-8" />,
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
        side: "right",
        icon: <img src={thescore} className="h-8 w-8" /> ,
    }, {
        title: "Information Technology Assistant",
        company: "Lassonde School of Engineering",
        date: "MAY 2022 - AUG 2022",
        details: [
            "Troubleshot and resolved hardware and software issues with a 99% success rate",
            "Automated software installation processes, saving hours of manual work",
            "Managed service requests and incidents through a ticketing system, ensuring timely resolution",
        ],
        side: "left",
        icon: <img src={lassonde} className="h-5 w-13" /> ,
    }, {
        title: "Technology Sales Representative",
        company: "Staples Canada",
        date: "JAN 2022 - AUG 2022",
        details: [
            "Achieved $30,000 in sales over 2 months, providing expert advice on technical products",
            "Trained employees on IBM AS400 inventory management and customer relations",
        ],
        side: "right",
        icon: <img src={staples} className="h-7 w-13" />,
    },
]

export default dataExperience