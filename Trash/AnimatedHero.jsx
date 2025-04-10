import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"

/**
 * AnimatedHero Component
 * 
 * This component creates an interactive hero section with:
 * 1. A 3D particle background using Three.js
 * 2. Animated text using Framer Motion
 * 3. A typewriter effect for role display
 * 4. Social media links and call-to-action buttons
 * 5. A scroll indicator
 */
const AnimatedHero = () => {
    // Reference to mount Three.js scene to the DOM
    const mountRef = useRef(null)

    /**
     * Text Animation Variants
     * 
     * These variants control the animation of the main text:
     * - hidden: Initial state (invisible)
     * - visible: Final state (visible) with staggered children animation
     * The staggerChildren property creates a wave-like effect where each letter
     * animates in sequence with a 0.1s delay between each
     */
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Creates a wave effect for text appearance
            },
        },
    }

    /**
     * Letter Animation Variants
     * 
     * Controls the animation of individual letters:
     * - hidden: Letters start 20px below their final position and invisible
     * - visible: Letters move up to their final position and fade in
     * The duration of 0.5s creates a smooth, readable animation
     */
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    // Array of professional roles to be displayed in the typewriter effect
    const roles = ["Software Developer", "ML Engineer", "AI Enthusiast", "Full-Stack Developer", "Problem Solver"]

    /**
     * Three.js Scene Setup and Animation
     * 
     * This useEffect hook:
     * 1. Sets up the Three.js scene, camera, and renderer
     * 2. Creates a particle system for the background
     * 3. Implements camera controls
     * 4. Handles animation and window resizing
     * 5. Cleans up resources on component unmount
     */
    useEffect(() => {
        // Early return if ref is not available
        if (!mountRef.current) return

        /**
         * Scene Setup
         * 
         * Creates a new Three.js scene with:
         * - Perspective camera (75° FOV, matches window aspect ratio)
         * - WebGL renderer with alpha channel and antialiasing
         */
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

        // Configure renderer with window dimensions and device pixel ratio
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        mountRef.current.appendChild(renderer.domElement)

        // Position camera 5 units back from the scene center
        camera.position.z = 5

        /**
         * Particle System Creation
         * 
         * Creates 2000 particles with:
         * - Random positions in a 10x10x10 cube
         * - BufferGeometry for efficient memory usage
         * - PointsMaterial for particle rendering
         */
        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCount = 2000

        // Generate random positions for particles in a 3D space
        const posArray = new Float32Array(particlesCount * 3)
        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10 // Random position between -5 and 5
        }

        // Set the position attribute for the particle geometry
        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

        /**
         * Particle Material Configuration
         * 
         * Creates a material for particles with:
         * - Size of 0.02 units
         * - Amber color (0xf59e0b)
         * - Semi-transparent (0.8 opacity)
         */
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xf59e0b, // Amber color
            transparent: true,
            opacity: 0.8,
        })

        // Create particle mesh and add to scene
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particlesMesh)

        /**
         * Camera Controls Setup
         * 
         * Implements OrbitControls with:
         * - Damping for smooth movement
         * - Disabled zoom for fixed perspective
         * - Auto-rotation for continuous background motion
         */
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.05
        controls.enableZoom = false
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.5

        /**
         * Animation Loop
         * 
         * Creates a continuous animation that:
         * 1. Rotates particles around Y and X axes
         * 2. Updates camera controls
         * 3. Renders the scene
         */
        const animate = () => {
            requestAnimationFrame(animate)

            // Rotate particles for dynamic background effect
            particlesMesh.rotation.y += 0.001
            particlesMesh.rotation.x += 0.0005

            controls.update()
            renderer.render(scene, camera)
        }

        animate()

        /**
         * Window Resize Handler
         * 
         * Updates camera and renderer when window size changes:
         * 1. Adjusts camera aspect ratio
         * 2. Updates projection matrix
         * 3. Resizes renderer
         */
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", handleResize)

        /**
         * Cleanup Function
         * 
         * Removes:
         * 1. Three.js canvas from DOM
         * 2. Resize event listener
         * Prevents memory leaks on component unmount
         */
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement)
            }
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        // Main container with full viewport height and black background
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Three.js container positioned absolutely */}
            <div ref={mountRef} className="absolute inset-0 z-0" />

            {/* Gradient overlay to improve text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10" />

            {/* Main content container with centered content */}
            <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
                {/* Greeting text with fade-in and slide-up animation */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-2 text-amber-400"
                >
                    <span className="text-xl font-light">Hello World, I'm</span>
                </motion.div>

                {/* Name with staggered letter animation */}
                <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl"
                >
                    {Array.from("PRABHJEE SINGH").map((letter, i) => (
                        <motion.span key={i} variants={letterVariants} className="inline-block text-white">
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Typewriter effect container with fade-in animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="typewriter h-8 mb-8"
                >
                    <span className="text-xl font-light text-white">I am a </span>
                    <span className="text-xl font-medium text-amber-400 typed-text"></span>
                </motion.div>

                {/* Social media links with fade-in and slide-up animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
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

                {/* Call-to-action buttons with fade-in and slide-up animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
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

                {/* Scroll indicator with fade-in and bounce animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                        }}
                    >
                        <ChevronDown className="h-8 w-8 text-amber-400" />
                    </motion.div>
                </motion.div>
            </div>

            {/* CSS for typewriter effect cursor */}
            <style jsx>{`
                .typewriter .typed-text::after {
                    content: "|";
                    animation: blink 1s infinite;
                }
                
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>

            {/* JavaScript for typewriter effect */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        document.addEventListener('DOMContentLoaded', function() {
                            const roles = ${JSON.stringify(roles)};
                            const typedTextSpan = document.querySelector(".typed-text");
                            
                            let roleIndex = 0;
                            let charIndex = 0;
                            let isDeleting = false;
                            
                            /**
                             * Typewriter Effect Function
                             * 
                             * This function:
                             * 1. Types out each role character by character
                             * 2. Pauses at the end of each role
                             * 3. Deletes the text character by character
                             * 4. Moves to the next role
                             * 5. Repeats the process
                             */
                            function type() {
                                const currentRole = roles[roleIndex];
                                
                                if (isDeleting) {
                                    typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
                                    charIndex--;
                                } else {
                                    typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
                                    charIndex++;
                                }
                                
                                if (!isDeleting && charIndex === currentRole.length) {
                                    isDeleting = true;
                                    setTimeout(type, 1500); // Pause at end of word
                                } else if (isDeleting && charIndex === 0) {
                                    isDeleting = false;
                                    roleIndex = (roleIndex + 1) % roles.length;
                                    setTimeout(type, 500); // Pause before next word
                                } else {
                                    setTimeout(type, isDeleting ? 50 : 100); // Typing/erasing speed
                                }
                            }
                            
                            setTimeout(type, 1000); // Initial delay
                        });
                    `,
                }}
            />
        </div>
    )
}

export default AnimatedHero
