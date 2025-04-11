import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { Github, Linkedin, ChevronDown } from "lucide-react"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Link } from 'react-scroll'


const Home = () => {

    // Initialize Three.js scene
    const mountRef = useRef(null);

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

    // Set up the scene, camera, and renderer

    useEffect(() => {
        // Return if reference not available
        if (!mountRef.current) return;

        // Set up scene
        const scene = new THREE.Scene();

        // Set the camera perspective to 75 defree Field of view, matches window aspect ratio
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Set up renderer with alpha channerl a nd antialiasing
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true})

        // Set renderer size to window size
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Set renderer pixel ratio to device pixel ratio
        renderer.setPixelRatio(window.devicePixelRatio);
        
        // Append renderer to the mount reference
        mountRef.current.appendChild(renderer.domElement);

        // Set camera position
        camera.position.z = 5;

        // Create a partical system
        const particles = new THREE.BufferGeometry();
        
        // Set the number of particles
        const particleCount = 2000;

        // Create an array to hold the particle positions we will do it Randomly 
        const positions = new Float32Array(particleCount * 3);
        for (let i=0; i < particleCount *3; i++ ){
            positions[i] = (Math.random() - 0.5) * 10
        }

        // Set the positions attribute to the geometry
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))

        // Create a material for the particles
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xf59e0b,
            transparent: true,
            opacity: 0.8,})

        // Create a points mesh with the geometry and material
        const particlesMesh = new THREE.Points(particles, particleMaterial);
        
        // Add the particles mesh to the scene
        scene.add(particlesMesh);

        // Camera controls
        const controls = new OrbitControls(camera, renderer.domElement)
        
        // Set controls properties
        
        // enable Damping for smoother controls
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        // Enable zooming
        controls.enableZoom = false;
        
        // Automatically rotate the camera
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;

        // Animation loop
        const animate = () => {
            // Request animation frame for smooth rendering
            requestAnimationFrame(animate);

            // Update the particles mesh rotation
            particlesMesh.rotation.y += 0.001;
            particlesMesh.rotation.x += 0.0005;


            controls.update();
            renderer.render(scene, camera);
        }
        animate();

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

        // Cleanup function to remove the renderer and event listener
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement)
            }
            window.removeEventListener("resize", handleResize)
        }

        
    },[])
    
    
  return (
      <div id="home" className="relative bg-black w-full overflow-hidden  min-h-screen">

          {/* Three.js container positioned absolutely */}
          <div ref={mountRef} className="absolute inset-0 z-0" />

          {/* Gradient overlay to improve text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10" />

          {/* Content with full brightness */}
          <div className="z-10 relative flex justify-center flex-col items-center min-h-screen text-white">
              
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-amber-400 text-xl">
                  Hello World!, I'm
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

              <h2 className=" h-8 mb-8 text-2xl ">
                  <span className="write1">ML Engineer</span>
                  <span className="write2">Software Developer</span>
              </h2>
              {/* Social media links with fade-in and slide-up animation */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="mb-12 flex space-x-4"
              >
                  <a
                      href="https://github.com/PrabhjeeSingh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-amber-400 hover:text-black"
                  >
                      <Github size={20} />
                  </a>
                  <a
                      href="https://linkedin.com/in/PrabhjeeSingh"
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
                      
                      to="projects"
                      className="rounded-full bg-amber-400 px-8 py-3 font-medium text-black transition-all hover:bg-amber-300"
                  >
                      View My Work
                  </Link>
                  <Link
                      smooth={true}
                      to="contact"
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
                  className="absolute bottom-22 left-1/2 -translate-x-1/2"
              >
                  <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut"
                      }}
                  >
                      
                      <Link smooth={true}  to='about' >
                          <ChevronDown className="h-8 w-8 text-amber-400" />
                      </Link>
                  </motion.div>
              </motion.div>
          
            </div>
      </div>
  )
}

export default Home