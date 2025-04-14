import { motion } from "framer-motion"
import { Brain, Cpu, Network, Zap, Code2, LineChart } from "lucide-react"

const features = [
    {
        icon: <Brain className="h-12 w-12" />,
        title: "Machine Learning",
        description: "Building intelligent systems that learn from data to make predictions and decisions.",
    },
    {
        icon: <Cpu className="h-12 w-12" />,
        title: "Deep Learning",
        description: "Implementing neural networks for complex pattern recognition and feature extraction.",
    },
    {
        icon: <Network className="h-12 w-12" />,
        title: "Natural Language Processing",
        description: "Creating systems that understand, interpret, and generate human language.",
    },
    {
        icon: <Zap className="h-12 w-12" />,
        title: "Computer Vision",
        description: "Developing algorithms that can interpret and understand visual information.",
    },
    {
        icon: <Code2 className="h-12 w-12" />,
        title: "AI Integration",
        description: "Seamlessly integrating AI capabilities into existing software systems and workflows.",
    },
    {
        icon: <LineChart className="h-12 w-12" />,
        title: "Data Analysis",
        description: "Extracting insights from complex datasets to drive informed decision-making.",
    },
]

const AIFeatureSection = () => {
    return (
        <section className="relative overflow-hidden bg-black py-20">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[url('/images/ai-pattern.svg')] bg-repeat"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-4 text-4xl font-bold text-white"
                    >
                        AI & ML <span className="text-amber-400">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-gray-300"
                    >
                        Passionate about leveraging artificial intelligence to solve complex problems
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group rounded-xl bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:bg-gray-800/50"
                        >
                            <div className="mb-4 text-amber-400 transition-transform duration-300 group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="/services"
                        className="inline-flex items-center rounded-full bg-amber-400 px-8 py-3 font-medium text-black transition-all hover:bg-amber-300"
                    >
                        Learn More About My AI Services
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default AIFeatureSection
