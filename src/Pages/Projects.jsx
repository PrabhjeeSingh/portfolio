import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Heart, GitFork } from "lucide-react"
import dataProjects from "../resource/dataProjects"

const categories = ["All", "Artificial Intelligence / Data Science", "Web Development", "Game Development", "Automation"]

const ProjectCard = ({ project }) => {
    const [showDetails, setShowDetails] = useState({})

    const toggleDescription = (projectID) => {
        setShowDetails((prev) => ({
            ...prev,
            [projectID]: !prev[projectID],
        }))
    }

    const truncateText = (text) => {
        if (text.length <= 90) return text;
        return text.slice(0, 90) + '...';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-xl transition-all hover:shadow-amber-400/20"
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

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>

                <div className="flex-grow">
                    <p className="mb-4 text-gray-400 cursor-pointer" onClick={() => toggleDescription(project.id)}>
                        {showDetails[project.id]
                            ? project.description
                            : truncateText(project.description)}
                        <span className="text-amber-400 ml-1 text-sm">
                            {project.description.length > 90 && (
                                showDetails[project.id] ? '(Show Less)' : '(Read More)'
                            )}
                        </span>
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-auto flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                        <Heart size={14} className="text-amber-400" />
                        <span>{project.likes}</span>
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

    const filteredProjects =
        activeCategory === "All"
            ? dataProjects
            : dataProjects.filter((project) => project.category.includes(activeCategory))

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

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

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
                        href="https://github.com/PrabhjeeSingh"
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
