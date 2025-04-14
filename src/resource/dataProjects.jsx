import React from 'react'
import align from '../assets/align.png'
import spider from '../assets/spider.jpg'
import analysis from '../assets/analysis2.png'
import discord from '../assets/discord.jpg'
import koru from '../assets/koru4.png'
import research from '../assets/research.jpeg'

const dataProjects = [
    {
        id: 1,
        title: "Curate Ed – Koru Hackathon",
        description: "An AI‑driven educational platform that leverages Cohere AI’s NLP APIs and Google Search APIs to filter credible sources, with a dynamic readability adjustment feature to tailor content to students’ comprehension levels in real‑time.",
        image: koru,
        tags: ["Cohere AI API", "Google Search API", "Natural Language Processing", "JavaScript", "React"],
        github: "https://github.com/PrabhjeeSingh/Koru-PA-3",
        demo: "https://snazzy-cactus-41c85e.netlify.app/",
        likes: 10,
        forks: 0,
        category: ["Artificial Intelligence / Data Science", "Web Development"]
    },

    {
        id: 2,
        title: "AI Librarian – ALIGN",
        description: "An award‑winning AI‑Enabled Library Interface Global Network built on WordPress with a JavaScript backend and LLM search capabilities, providing multilingual academic resource accessibility for global researchers.",
        image: align,
        tags: ["WordPress", "JavaScript", "LLM", "Search"],
        github: "https://prabhjee.wixsite.com/align",
        demo: "https://prabhjee.wixsite.com/align",
        likes: 25,
        forks: 0,
        category: ["Artificial Intelligence / Data Science", "Web Development"]
    },

    {
        id: 3,
        title: "CICIoMT2024 Research Paper Replication",
        description: " This project aimed to replicate and validate a research study on detecting cyberattacks targeting healthcare IoT devices. Using a large-scale dataset of over 8 million network-flow records collected from real and simulated medical devices",
        image: research,
        tags: ["Python", "Random Forest", "XGBoost", "Logistic Regression", "Deep Neural Networks"],
        github: "https://github.com/PrabhjeeSingh/ML-Network-Analysis",
        demo: "https://github.com/PrabhjeeSingh/ML-Network-Analysis/blob/main/Final_Network_Analysis.ipynb",
        likes: 5,
        forks: 0,
        category: ["Artificial Intelligence / Data Science", "Research"]
    }, 
    {
        id: 4,
        title: "Political Climate vs Bonds Yield Correlation",
        description: "Utilized Python, Pandas, NumPy, Matplotlib, and Seaborn for data preprocessing and visualization. Applied NLP techniques using NLTK to analyze political sentiment and its correlation with bond yields, employing OLS modeling and scikit‑learn linear regression for statistical analysis.",
        image: analysis,
        tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "NLTK", "scikit-learn", "OLS Regression"],
        github: "https://github.com/PrabhjeeSingh/DataScienceCorrelation",
        demo: "https://github.com/PrabhjeeSingh/DataScienceCorrelation/blob/main/Correlation_BondsYield_and_Political_climate.ipynb",
        likes: 3,
        forks: 0,
        category: ["Artificial Intelligence / Data Science", "Finance"]
    }
    ,
    {
        id: 5,
        title: "Spidy‑Vs‑Rhino 2D‑Game",
        description: "A 2D action game built in Unity using C# scripting and ShaderLab/HLSL assets, featuring custom gameplay mechanics, background music, and restart functionality.",
        image: spider,
        tags: ["Unity", "C#", "ShaderLab", "HLSL"],
        github: "https://github.com/PrabhjeeSingh/Spidy-Vs-Rhino-2D-Game",
        demo: "https://github.com/PrabhjeeSingh/Spidy-Vs-Rhino-2D-Game/assets/67653335/d216b2a8-880f-40f6-9a5c-602aa2f70f55",
        likes: 17,
        forks: 0,
        category: ["Game Development"]
    },
    {
        id: 6,
        title: "ScrewedBot",
        description: "A Discord bot developed in Python, integrating an Email API for in‑chat email display and leveraging the Cogs library for dynamic module management, enabling real‑time code modifications while operational.",
        image: discord,
        tags: ["Python", "Discord API", "Cogs", "Email API"],
        github: "https://github.com/PrabhjeeSingh/ScrewedBot",
        demo: "https://github.com/PrabhjeeSingh/ScrewedBot",
        likes: 2,
        forks: 0,
        category: ["Bot", "Automation"]
    }






]
  

export default dataProjects