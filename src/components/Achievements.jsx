import React from 'react'
import { motion } from "framer-motion"
import { Code, Server, Cloud} from "lucide-react"

const Achievements = () => {
    const achievements = [
        {
            title: "Developed ETL Pipeline",
            description: "Automated 90% of data extraction process, saving 15+ hours weekly",
            icon: <Server className="h-10 w-10" />,
            color: "from-blue-500 to-purple-500",
        },
        {
            title: "Modernized Legacy Software",
            description: "Enhanced usability by 35% while ensuring compatibility with outdated systems",
            icon: <Code className="h-10 w-10" />,
            color: "from-amber-500 to-red-500",
        },
        {
            title: "Optimized Server Performance",
            description: "Reduced implementation time by 50% through server compatibility improvements",
            icon: <Cloud className="h-10 w-10" />,
            color: "from-green-500 to-teal-500",
        },
    ]
  return (
    <>
          {/* Achievements Section */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
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
                          className="relative overflow-hidden rounded-xl border border-gray-800 hover:border-amber-400/30 transition-all"
                      >
                          {/* Gradient background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10`}></div>

                          {/* Content */}
                          <div className="relative p-6">
                              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-black/50 text-amber-400 mb-4 mx-auto">
                                  {achievement.icon}
                              </div>
                              <h4 className="text-lg font-semibold text-white text-center mb-2">{achievement.title}</h4>
                              <p className="text-gray-400 text-center text-sm">{achievement.description}</p>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </motion.div>
    </>
  )
}

export default Achievements