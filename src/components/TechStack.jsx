import React from 'react'
import { Code, Server, Cloud, Brain, Settings, Languages } from "lucide-react"
import { motion } from "framer-motion"
import { Si4Chan, SiCharles, SiCircleci, SiDatadog, SiDocker, SiElixir, SiGithubactions, SiHtml5, SiMongodb, SiNumpy, SiOpenai, SiPostgresql, SiPython, SiReact, SiScikitlearn, SiTailwindcss, SiTensorflow, SiWordpress } from "react-icons/si"
import { FaAws, FaJava } from "react-icons/fa"

const TechStack = () => {

    const techStack = [
        {
            name: "Frontend",
            icon: <Code className="h-6 w-6" />,
            skills: [
                { name: "React", icon: <SiReact />},
                { name: "Html", icon: <SiHtml5 /> },
                { name: "TailwindCSS", icon: <SiTailwindcss/> },
                { name: "WordPress", icon: <SiWordpress /> },
                { name: "SharePoint", icon: <Si4Chan/> },
            ],
        },
        {
            name: "Backend",
            icon: <Server className="h-6 w-6" />,
            skills: [
                { name: "Java", icon: <FaJava /> },
                { name: "Elixir", icon: <SiElixir /> },
                { name: "Python", icon: <SiPython /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "Rest API", icon: <Settings size={15} /> },
            ],
        },
        {
            name: "AI/ML",
            icon: <Brain className="h-6 w-6" />,
            skills: [
                { name: "TensorFlow", icon: <SiTensorflow /> },
                { name: "NumPy", icon: <SiNumpy /> },
                { name: "Scikit-learn", icon: <SiScikitlearn /> },
                { name: "OpenAI API", icon: <SiOpenai /> },
                { name: "NLP", icon: <Languages size={15} /> },
            ],
        },
        {
            name: "Cloud/ DevOps",
            icon: <Cloud className="h-6 w-6" />,
            skills: [
                { name: "AWS", icon: <FaAws />},
                { name: "Docker", icon: <SiDocker /> },
                { name: "Charles Proxy", icon: <SiCharles /> },
                { name: "GitHub Actions", icon: <SiGithubactions /> },
                { name: "CI/CD", icon: <SiCircleci /> },
                { name: "Datadog", icon: <SiDatadog /> },
            ],
        },
    ]
    const techStack_c = [
        {
            name: "Frontend",
            icon: <Code className="h-6 w-6" />,
            skills: [
                { name: "React", icon: <SiReact className="text-cyan-300" /> },
                { name: "Html", icon: <SiHtml5 className='text-orange-500'/> },
                { name: "TailwindCSS", icon: <SiTailwindcss className='text-cyan-500'/> },
                { name: "WordPress", icon: <SiWordpress className='text-cyan-600'/> },
                { name: "SharePoint", icon: <Si4Chan className='text-teal-500'/> },
            ],
        },
        {
            name: "Backend",
            icon: <Server className="h-6 w-6" />,
            skills: [
                { name: "Java", icon: <FaJava className='text-white' /> },
                { name: "Elixir", icon: <SiElixir className='text-fuchsia-600'/> },
                { name: "Python", icon: <SiPython className='text-sky-700'/> },
                { name: "MongoDB", icon: <SiMongodb className='text-green-600' /> },
                { name: "PostgreSQL", icon: <SiPostgresql className='text-blue-400' /> },
                { name: "Rest API", icon: <Settings size={15} className='text-white'/> },
            ],
        },
        {
            name: "AI/ML",
            icon: <Brain className="h-6 w-6" />,
            skills: [
                { name: "NumPy", icon: <SiNumpy className='text-cyan-800' /> },
                { name: "Scikit-learn", icon: <SiScikitlearn className='text-amber-500'/> },
                { name: "TensorFlow", icon: <SiTensorflow className='text-orange-400' /> },
                { name: "NLP", icon: <Languages size={15} className='text-neutral-400'/> },
                { name: "OpenAI API", icon: <SiOpenai className='text-white' /> },
            ],
        },
        {
            name: "Cloud/ DevOps",
            icon: <Cloud className="h-6 w-6" />,
            skills: [
                { name: "AWS", icon: <FaAws className='text-orange-300'/> },
                { name: "Docker", icon: <SiDocker className='text-blue-400' /> },
                { name: "CI/CD", icon: <SiCircleci className='text-neutral-400' /> },
                { name: "Datadog", icon: <SiDatadog className='text-purple-600' /> },
                { name: "GitHub Actions", icon: <SiGithubactions className='text-blue-500' /> },
                { name: "Charles Proxy", icon: <SiCharles className='text-neutral-100' /> },
               
                
            ],
        },
    ]
  return (
    <>
          {/* Tech Stack Section */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
          >
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                  My <span className="text-amber-400">Tech Stack</span>
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {techStack_c.map((tech, index) => (
                      <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-amber-400/30 transition-all"
                      >
                          <div className="flex items-center mb-4">
                              <div className="mr-3 text-amber-400">{tech.icon}</div>
                              <h4 className="text-xl font-semibold text-white">{tech.name}</h4>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                              {tech.skills.map((skill, i) => (
                                  <div key={i} className="flex items-center space-x-2 bg-black/50 rounded-lg p-2">
                                      <div className="w-6 h-6 flex items-center justify-center bg-amber-400/10 rounded-md text-amber-400 text-xs">
                                         
                                          {skill.icon}
                                      </div>
                                      <span className="text-gray-300 text-sm">{skill.name}</span>
                                  </div>
                              ))}
                          </div>
                      </motion.div>
                  ))}
              </div>
            </motion.div>
    </>
  )
}

export default TechStack