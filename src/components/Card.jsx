import React, { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, Building } from "lucide-react"
import { Link } from "react-router-dom"


const Card = ({ item, info }) => {
    console.log(item + "item : " + info)
    const [show, setShow] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
        >
            {/* Timeline circle */}
            <div
                className={`hidden [@media(min-width:944px)]:block absolute top-2 w-5 h-5 rounded-full bg-amber-400 border-4 border-gray-500 z-10 ${item.side === "left" ? "right-5 translate-x-1/2" : "left-5 -translate-x-1/2"
                    }`}
            />

            {/* Timeline line */}
            <div
                className={`hidden [@media(min-width:944px)]:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/80 via-amber-400/50 to-amber-400/10 ${item.side === "left" ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                    }`}
            />

            {/* Card */}
            <motion.div
                whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.1), 0 8px 10px -6px rgba(245, 158, 11, 0.1)",
                }}
                className="relative bg-gray-900 border border-gray-800 hover:border-amber-400/30 rounded-xl p-6 shadow-lg transition-all"
            >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-amber-400/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card content */}
                <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <div className="flex items-center mb-2 sm:mb-0">
                            <div className="mr-3 p-2 rounded-lg bg-amber-400/10 text-amber-400">
                                {item.icon || <Briefcase className="h-5 w-5" />}
                            </div>
                            <h3 className="font-bold text-white text-xl">{item.title}</h3>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{item.date}</span>
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <Building className="h-4 w-4 text-gray-500 mr-2" />
                        <h4 className="font-medium text-amber-400">{item.company}</h4>
                    </div>

                    {info ? (
                        <>
                            <button
                                onClick={() => setShow(prevState => !prevState)}
                                className="w-full py-2 px-4 text-gray-300 hover:text-amber-300 transition-colors"
                            >
                                {show ? "Click to hide details" : "Click to show details"}
                            </button>
                            {show && (
                                <ul className="space-y-3 mt-4">
                                    {item.details.map((detail, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.1 * i }}
                                            viewport={{ once: true }}
                                            className="text-gray-300 pl-4 border-l-2 border-amber-400/30"
                                        >
                                            {detail}
                                        </motion.li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ) : (
                        <ul className="space-y-3">
                            {item.details.map((detail, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * i }}
                                    viewport={{ once: true }}
                                    className="text-gray-300 pl-4 border-l-2 border-amber-400/30"
                                >
                                    {detail}
                                </motion.li>
                            ))}
                        </ul>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Card
