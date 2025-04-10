import React from 'react'
import { motion } from 'framer-motion'
import personImage from '../assets/person.jpg'

const About = () => {

    const info = "Computer Science grad with a passion for transforming complex problems into elegant code across full-stack, AI, automation, and cloud domains. I thrive on building intelligent solutions that drive real-world impact. Always curious, always learning, and ready to push technological boundaries."

    const stats = [
        { num: '2+', of: 'Years Exeperience' },
        { num: '20+', of: 'Projects' },
        { num: '100%', of: 'Satisfaction' },
        { num: '10+', of: 'Technologies' }
    ]

    return (
        <section id="about" className="bg-black py-20">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-xl">
                            <img
                                src={personImage}
                                alt="Prabhjee Singh"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="mb-6 text-4xl font-bold text-white">
                            About <span className="text-amber-400">Me</span>
                        </h2>
                        <p className="mb-6 text-gray-300">
                            {info}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((info, index) => (
                                <div key={index} className="text-gray-300">
                                    <h3 className="mb-2 font-semibold text-white">{info.of}:</h3>
                                    <p>{info.num}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About