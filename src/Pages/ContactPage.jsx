"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        isError: false,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false })

        // Simulate form submission
        try {
            // Replace with actual form submission logic
            await new Promise((resolve) => setTimeout(resolve, 1500))
            setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false })
            setFormData({ name: "", email: "", subject: "", message: "" })
        } catch (error) {
            setFormStatus({ isSubmitting: false, isSubmitted: false, isError: true })
        }
    }

    return (
        <div className="min-h-screen bg-black py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h1 className="mb-4 text-4xl font-bold text-white">
                        Get In <span className="text-amber-400">Touch</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-gray-300">
                        Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid gap-12 md:grid-cols-2">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="mb-6 text-2xl font-bold text-white">Contact Information</h2>

                        <div className="mb-8 space-y-6">
                            <div className="flex items-start">
                                <div className="mr-4 rounded-full bg-amber-400/10 p-3 text-amber-400">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-medium text-white">Email</h3>
                                    <a
                                        href="mailto:prabhjee.singh@example.com"
                                        className="text-gray-300 transition-colors hover:text-amber-400"
                                    >
                                        prabhjee.singh@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 rounded-full bg-amber-400/10 p-3 text-amber-400">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-medium text-white">Phone</h3>
                                    <a href="tel:+14165551234" className="text-gray-300 transition-colors hover:text-amber-400">
                                        +1 (416) 555-1234
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 rounded-full bg-amber-400/10 p-3 text-amber-400">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-medium text-white">Location</h3>
                                    <p className="text-gray-300">Toronto, Ontario, Canada</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h2 className="mb-4 text-2xl font-bold text-white">Connect With Me</h2>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition-all hover:bg-amber-400 hover:text-black"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition-all hover:bg-amber-400 hover:text-black"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition-all hover:bg-amber-400 hover:text-black"
                                >
                                    <Twitter className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Map or Image */}
                        <div className="mt-12 overflow-hidden rounded-xl">
                            <img src="/images/toronto-map.jpg" alt="Toronto Map" className="h-64 w-full object-cover" />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="rounded-xl bg-gray-900/50 p-8 backdrop-blur-sm">
                            <h2 className="mb-6 text-2xl font-bold text-white">Send Me a Message</h2>

                            {formStatus.isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="rounded-lg bg-green-500/20 p-6 text-center"
                                >
                                    <div className="mb-4 flex justify-center">
                                        <div className="rounded-full bg-green-500/20 p-3 text-green-400">
                                            <Send className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-white">Message Sent!</h3>
                                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                                    <button
                                        onClick={() => setFormStatus({ isSubmitting: false, isSubmitted: false, isError: false })}
                                        className="mt-4 rounded-full bg-amber-400 px-6 py-2 font-medium text-black transition-all hover:bg-amber-300"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4 grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                                            placeholder="I'd like to discuss a potential project..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus.isSubmitting}
                                        className="flex w-full items-center justify-center rounded-lg bg-amber-400 px-6 py-3 font-medium text-black transition-all hover:bg-amber-300 disabled:opacity-70"
                                    >
                                        {formStatus.isSubmitting ? (
                                            <>
                                                <svg
                                                    className="mr-2 h-5 w-5 animate-spin text-black"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-5 w-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>

                                    {formStatus.isError && (
                                        <div className="mt-4 rounded-lg bg-red-500/20 p-3 text-center text-red-400">
                                            Something went wrong. Please try again later.
                                        </div>
                                    )}
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
