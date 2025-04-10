import { motion } from "framer-motion"
import { Trophy, Award, Medal } from "lucide-react"

const awards = [
    {
        id: 1,
        title: "Dean's Honor Roll",
        organization: "York University",
        year: "2023",
        description: "Recognized for academic excellence with a GPA in the top 5% of the Computer Science department.",
        icon: <Trophy className="h-10 w-10" />,
    },
    {
        id: 2,
        title: "Hackathon Champion",
        organization: "YorkU Hacks",
        year: "2022",
        description: "First place winner for developing an AI-powered accessibility solution for visually impaired users.",
        icon: <Award className="h-10 w-10" />,
    },
    {
        id: 3,
        title: "Undergraduate Research Award",
        organization: "Lassonde School of Engineering",
        year: "2024",
        description: "Received funding for research on machine learning applications in natural language processing.",
        icon: <Medal className="h-10 w-10" />,
    },
]

const AwardsSection = () => {
    return (
        <section className="bg-black py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-white">
                        My <span className="text-amber-400">Awards</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-300">Recognition for academic excellence and innovation</p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {awards.map((award) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: award.id * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 transition-all hover:border-amber-400/30"
                        >
                            {/* Animated background effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-15"></div>

                            <div className="relative">
                                {/* Trophy icon with glow effect */}
                                <motion.div
                                    className="mb-4 flex justify-center"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <div className="relative">
                                        <div className="absolute -inset-4 rounded-full bg-amber-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative rounded-full bg-amber-400/10 p-4 text-amber-400">{award.icon}</div>
                                    </div>
                                </motion.div>

                                <h3 className="mb-1 text-center text-xl font-bold text-white">{award.title}</h3>

                                <div className="mb-3 flex items-center justify-center space-x-2 text-sm text-gray-400">
                                    <span>{award.organization}</span>
                                    <span>•</span>
                                    <span>{award.year}</span>
                                </div>

                                <p className="text-center text-gray-300">{award.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AwardsSection
