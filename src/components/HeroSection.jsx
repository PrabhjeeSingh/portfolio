import { motion } from "framer-motion"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"

const HeroSection = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background with gradient overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/hero-bg.jpg")',
                    filter: "brightness(0.6)",
                }}
            />

            {/* Animated particles background */}
            <div className="absolute inset-0 bg-black/50">
                <div id="particles-js" className="h-full w-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-2 text-amber-400"
                >
                    <span className="text-xl font-light">Hi, I'm</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl"
                >
                    PRABHJEE SINGH
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    className="mb-8 flex items-center space-x-3 text-xl font-light"
                >
                    <span>Software Developer</span>
                    <span className="text-amber-400">|</span>
                    <span>ML/AI Enthusiast</span>
                </motion.div>

                {/* Tech stack icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-8 flex flex-wrap items-center justify-center gap-6"
                >
                    {["React", "Python", "TensorFlow", "Node.js", "AWS"].map((tech, index) => (
                        <div key={tech} className="flex items-center rounded-full bg-black/30 px-4 py-2 text-sm backdrop-blur-sm">
                            {tech}
                        </div>
                    ))}
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-12 flex space-x-4"
                >
                    <a
                        href="https://github.com/yourname"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-amber-400 hover:text-black"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourname"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-amber-400 hover:text-black"
                    >
                        <Linkedin size={20} />
                    </a>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                    <Link
                        to="/work"
                        className="rounded-full bg-amber-400 px-8 py-3 font-medium text-black transition-all hover:bg-amber-300"
                    >
                        View My Work
                    </Link>
                    <Link
                        to="/contact"
                        className="rounded-full border border-white/30 bg-transparent px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                        <ChevronDown className="h-8 w-8 text-amber-400" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection
