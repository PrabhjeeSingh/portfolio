import { motion } from "framer-motion"
import { Code, Server, Cloud, Award, Briefcase, Brain, Github, Linkedin, Trophy, Medal } from "lucide-react"
import PrabhjeeSingh from "../assets/person.jpg"
import Stats from "../components/Stats"
import TechStack from "../components/TechStack"
import Achievements from "../components/Achievements"
import Awards from "../components/Awards"

const AboutPage = () => {
    const info =
        "Computer Science grad with a passion for transforming complex problems into elegant code across full-stack, AI, automation, and cloud domains. I thrive on building intelligent solutions that drive real-world impact. Always curious, always learning, and ready to push technological boundaries."
        

    return (
        <div id="about" className="bg-black py-20 min-h-screen">
            <div className="container mx-auto px-4">
                {/* About Me Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-12 mb-20"
                >
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/3 flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-amber-400 blur-md opacity-20 transform rotate-6"></div>
                            <img
                                src={PrabhjeeSingh}
                                alt="Photo of Prabhjee Singh"
                                className="relative z-10 rounded-2xl w-64 md:w-80 object-cover border-2 border-amber-400/20 shadow-xl"
                            />


                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full md:w-2/3 md:text-left text-center"
                    >
                        {/* Heading */}
                        <h2 className="font-bold text-3xl md:text-4xl text-white">
                            About <span className="text-amber-400">Me!</span>
                        </h2>

                        {/* Underline */}
                        <div className="h-1 w-20 bg-amber-400 my-4 md:mx-0 mx-auto"></div>

                        {/* Paragraph */}
                        <p className="mx-auto mb-8 max-w-2xl text-gray-300 text-lg leading-relaxed">{info}</p>

                        {/* Stats Section */}
                        <Stats />

                    </motion.div>
                </motion.div>
                
                {/* Tech Stack Section */}
                <TechStack/>
                {/* Achievements Section */}
                <Achievements />
                {/* Awards Section */}
                <Awards />
            </div>
        </div>
    )
}

export default AboutPage
