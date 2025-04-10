import { motion } from "framer-motion"
import { Code, Server, Cloud, Award, Briefcase, Brain, Github, Linkedin } from "lucide-react"
import PersonImage from "../assets/person.jpg"

const Aboutv = () => {
    const info =
        "Computer Science grad with a passion for transforming complex problems into elegant code across full-stack, AI, automation, and cloud domains. I thrive on building intelligent solutions that drive real-world impact. Always curious, always learning, and ready to push technological boundaries."

    const stats = [
        { num: "2+", of: "Years Experience", icon: <Briefcase className="h-5 w-5" /> },
        { num: "20+", of: "Projects", icon: <Github className="h-5 w-5" /> },
        { num: "100%", of: "Satisfaction", icon: <Award className="h-5 w-5" /> },
        { num: "10+", of: "Technologies", icon: <Code className="h-5 w-5" /> },
    ]

    const techStack = [
        { name: "Frontend", skills: ["React", "Next.js", "TailwindCSS", "JavaScript"], icon: <Code className="h-6 w-6" /> },
        { name: "Backend", skills: ["Node.js", "Express", "Python", "MongoDB"], icon: <Server className="h-6 w-6" /> },
        { name: "AI/ML", skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI"], icon: <Brain className="h-6 w-6" /> },
        { name: "Cloud", skills: ["AWS", "Docker", "Vercel", "GitHub Actions"], icon: <Cloud className="h-6 w-6" /> },
    ]

    const achievements = [
        {
            title: "Developed ETL Pipeline",
            description: "Automated 90% of data extraction process, saving 15+ hours weekly",
        },
        {
            title: "Modernized Legacy Software",
            description: "Enhanced usability by 35% while ensuring compatibility with outdated systems",
        },
        {
            title: "Optimized Server Performance",
            description: "Reduced implementation time by 50% through server compatibility improvements",
        },
    ]

    return (
        <div id="about" className="bg-black py-20 min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-12"
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
                                src={PersonImage}
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

                        {/* Stats Info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {stats.map((stat, index) => (
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
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Tech Stack Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        My <span className="text-amber-400">Tech Stack</span>
                    </h3>

                    <div className="grid md:grid-cols-4 gap-6">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-amber-400/30 transition-all"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="mr-3 text-amber-400">{tech.icon}</div>
                                    <h4 className="text-xl font-semibold text-white">{tech.name}</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {tech.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-black/50 text-gray-300 text-sm rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        Key <span className="text-amber-400">Achievements</span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-amber-400/30 transition-all"
                            >
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-400/10 text-amber-400 mb-4 mx-auto">
                                    <Award className="h-8 w-8" />
                                </div>
                                <h4 className="text-lg font-semibold text-white text-center mb-2">{achievement.title}</h4>
                                <p className="text-gray-400 text-center text-sm">{achievement.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Aboutv
