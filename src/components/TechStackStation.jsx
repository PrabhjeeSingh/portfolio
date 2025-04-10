
import { motion } from "framer-motion"

const technologies = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "TailwindCSS", "JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Python", "Django", "FastAPI", "MongoDB", "PostgreSQL"],
    },
    {
        category: "AI/ML",
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Hugging Face", "OpenAI API"],
    },
    {
        category: "DevOps",
        items: ["Git", "GitHub Actions", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
    },
]

const TechStackSection = () => {
    return (
        <section className="bg-gradient-to-b from-gray-900 to-black py-20">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-4 text-4xl font-bold text-white"
                    >
                        My <span className="text-amber-400">Tech Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-gray-300"
                    >
                        The technologies and tools I use to bring ideas to life
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm"
                        >
                            <h3 className="mb-4 text-center text-xl font-bold text-amber-400">{tech.category}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {tech.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-black/30 px-3 py-1 text-sm text-gray-300 backdrop-blur-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStackSection
