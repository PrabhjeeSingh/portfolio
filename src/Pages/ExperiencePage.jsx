import { useState } from "react"
import { motion } from "framer-motion"
import Timeline from "../components/Timeline"
import dataLeadership from "../resource/dataLeadership"
import dataExperience from "../resource/dataExperience"
import dataEducation from "../resource/dataEducation"

const ExperiencePage = () => {
    const [activeTab, setActiveTab] = useState("work")

    return (
        <div id="experience" className="min-h-screen bg-black py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h1 className="mb-4 text-4xl font-bold text-white">
                        My <span className="text-amber-400">Journey</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-gray-300">
                        A timeline of my professional experience, education, and leadership experience.
                    </p>
                </motion.div>

                {/* Tab navigation */}
                <div className="mb-12 flex justify-center">
                    <div className="inline-flex rounded-full bg-gray-900 p-1">
                        <button
                            onClick={() => setActiveTab("work")}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "work" ? "bg-amber-400 text-black" : "text-gray-300 hover:text-white"
                                }`}
                        >
                            Work Experience
                        </button>
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "education" ? "bg-amber-400 text-black" : "text-gray-300 hover:text-white"
                                }`}
                        >
                            Education
                        </button>
                        <button
                            onClick={() => setActiveTab("leadership")}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "leadership" ? "bg-amber-400 text-black" : "text-gray-300 hover:text-white"
                                }`}
                        >
                            Leadership
                        </button>
                    </div>
                </div>

                {/* Work Experience Timeline */}
                {activeTab === "work" && (
                    <Timeline data={dataExperience} />
                )}

                {/* Education Timeline */}
                {activeTab === "education" && (
                    <Timeline data={dataEducation}  />
                )}

                {/* Leadership Section */}
                {activeTab === "leadership" && (
                    <Timeline data={dataLeadership} info={true} />
                )}
            </div>
        </div>
    )
}

export default ExperiencePage
