import React from 'react'

const About = () => {

    const info = "Computer Science grad with a passion for transforming complex problems into elegant code across full-stack, AI, automation, and cloud domains. I thrive on building intelligent solutions that drive real-world impact. Always curious, always learning, and ready to push technological boundaries."

    const stats = [
        { num: '2+', of: 'Years Exeperience' },
        { num: '20+', of: 'Projects' },
        { num: '100%', of: 'Satisfaction' },
        { num: '10+', of: 'Technologies' }
    ]

    return (
        <>
            <div id="about" className="flex justify-center items-center bg-gray-50 py-20 border-2 min-h-screen">
                <div className="mx-auto px-4 container">

                    {/* Content will go here */}
                    <div className="flex md:flex-row flex-col items-center border-cyan-100">
                        {/* Image Section */}
                        <div className="flex justify-center mb-10 md:mb-0 w-full md:w-2/3">
                            <img
                                src="src/assets/person.jpg"
                                alt="Photo of Prabhjee Singh"
                                className="inset-shadow-sm shadow-2xl rounded-2xl w-60 md:w-72 object-cover"
                            />
                        </div>

                        {/* Content Section  */}
                        <div className='md:pl-1 w-full md:w-2/3 md:text-left text-center'>
                            {/* Heading */}
                            <h2 className='font-bold text-3xl md:text-4xl'>About Me!</h2>
                            {/* Underline */}
                            <hr className='bg-primary mx-auto md:mx-0 my-2 mb-6 border-primary w-15 md:w-20 h-1'></hr>
                            {/* Paragraph */}
                            <p className="mx-auto mb-8 max-w-2xl text-gray-700 text-lg leading-relaxed">
                                {info}
                            </p>

                            {/* Stats Info */}
                            <div className='gap-4 grid grid-cols-2 sm:mx-auto lg:mx-0 max-w-md md:text-left sm:text-center'>
                                {stats.map((info, index) => (
                                    <div key={index} className='bg-white shadow-sm p-3 rounded-lg text-yellow-600'>
                                        <div className='font-bold text-2xl'>{info.num}</div>
                                        <div className='text-gray-600'>{info.of}</div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default About