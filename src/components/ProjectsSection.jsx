
import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"

// Sample projects - replace with your actual GitHub projects
const projects = [
    {
        id: 1,
        title: "AI Image Generator",
        description: "A web application that uses OpenAI's DALL-E to generate images from text prompts.",
        image: "/images/project-1.jpg",
        tags: ["React", "Node.js", "OpenAI API", "TailwindCSS"],
        github: "https://github.com/yourusername/ai-image-generator",
        demo: "https://ai-image-generator.vercel.app",
        stars: 45,
        forks: 12,
    },
    {
        id: 2,
        title: "Sentiment Analysis Dashboard",
        description: "Real-time sentiment analysis of Twitter data using machine learning algorithms.",
        image: "/images/project-2.jpg",
        tags: ["Python", "TensorFlow", "React", "D3.js"],
        github: "https://github.com/yourusername/sentiment-analysis",
        demo: "https://sentiment-dashboard.vercel.app",
        stars: 32,
        forks: 8,
    },
    {
        id: 3,
        title: "Smart Task Manager",
        description: "A task management app with AI-powered prioritization and scheduling.",
        image: "/images/project-3.jpg",
        tags: ["React", "Firebase", "ML.js", "Material UI"],
        github: "https://github.com/yourusername/smart-tasks",
        demo: "https://smart-tasks.vercel.app",
        stars: 28,
        forks: 5,
    },
    {
        id: 4,
        title: "Personal Finance Tracker",
        description: "A finance tracking application with ML-based expense categorization and insights.",
        image: "/images/project-4.jpg",
        tags: ["React", "Node.js", "MongoDB", "Chart.js"],
        github: "https://github.com/yourusername/finance-tracker",
        demo: "https://finance-tracker.vercel.app",
        stars: 19,
        forks: 3,
    },
    {
        id: 5,
        title: "Neural Network Visualizer",
        description: "Interactive visualization tool for neural networks to help understand ML concepts.",
        image: "/images/project-5.jpg",
        tags: ["JavaScript", "Three.js", "TensorFlow.js"],
        github: "https://github.com/yourusername/nn-visualizer",
        demo: "https://nn-visualizer.vercel.app",
        stars: 56,
        forks: 14,
    },
    {
        id: 6,
        title: "Code Mentor AI",
        description: "AI-powered code review and mentoring tool for developers.",
        image: "/images/project-6.jpg",
        tags: ["Python", "GPT-4", "React", "Express"],
        github: "https://github.com/yourusername/code-mentor-ai",
        demo: "https://code-mentor-ai.vercel.app",
        stars: 38,
        forks: 9,
    },
]

// Filter categories
const categories = ["All", "Machine Learning", "Web Development", "Data Science", "Mobile"]

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-xl bg-gray-900 shadow-xl transition-all hover:shadow-amber-400/20"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-amber-400 hover:text-black"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-amber-400 hover:text-black"
                    >
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>

            <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                        <Star size={14} className="text-amber-400" />
                        <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <GitFork size={14} />
                        <span>{project.forks}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All")

    // Filter projects based on active category
    const filteredProjects = projects

    return (
        <section id="projects" className="bg-black py-20">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-4 text-4xl font-bold text-white"
                    >
                        My <span className="text-amber-400">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-gray-300"
                    >
                        Showcasing my latest work and open-source contributions
                    </motion.p>
                </div>

                {/* Filter buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-wrap justify-center gap-2"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${activeCategory === category ? "bg-amber-400 text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-gray-900 to-black p-8 text-center"
                >
                    <h3 className="mb-4 text-2xl font-bold text-white">Want to see more?</h3>
                    <p className="mb-6 text-gray-300">
                        Check out my GitHub profile for all my open-source projects and contributions
                    </p>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 rounded-full bg-amber-400 px-6 py-3 font-medium text-black transition-all hover:bg-amber-300"
                    >
                        <Github size={20} />
                        <span>View GitHub Profile</span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default ProjectsSection
