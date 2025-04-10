import { motion } from "framer-motion"
import { Code, Database, Brain, Cloud, Server, LineChart } from "lucide-react"

const services = [
    {
        icon: <Code className="h-10 w-10" />,
        title: "Web Development",
        description:
            "Building responsive, modern web applications using React, Next.js, and other cutting-edge technologies.",
    },
    {
        icon: <Brain className="h-10 w-10" />,
        title: "Machine Learning",
        description:
            "Developing intelligent solutions using TensorFlow, PyTorch, and other ML frameworks to solve complex problems.",
    },
    {
        icon: <Database className="h-10 w-10" />,
        title: "Data Engineering",
        description: "Creating robust data pipelines and ETL processes to transform raw data into valuable insights.",
    },
    {
        icon: <Cloud className="h-10 w-10" />,
        title: "Cloud Solutions",
        description: "Architecting scalable cloud infrastructure on AWS, GCP, and Azure for optimal performance and cost.",
    },
    {
        icon: <Server className="h-10 w-10" />,
        title: "Backend Development",
        description: "Building secure, efficient APIs and server-side applications using Node.js, Express, and Python.",
    },
    {
        icon: <LineChart className="h-10 w-10" />,
        title: "Data Analysis",
        description:
            "Extracting meaningful insights from complex datasets using statistical methods and visualization tools.",
    },
]

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center rounded-xl bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:bg-amber-400/10 hover:shadow-lg"
        >
            <div className="mb-4 rounded-full bg-amber-400/20 p-4 text-amber-400">{service.icon}</div>
            <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
        </motion.div>
    )
}

const Services = () => {
    return (
        <section id="services" className="bg-gradient-to-b from-black to-gray-900 py-20">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-4 text-4xl font-bold text-white"
                    >
                        My <span className="text-amber-400">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-gray-300"
                    >
                        Leveraging cutting-edge technologies to deliver exceptional solutions across various domains
                    </motion.p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
