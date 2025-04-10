import React, { useEffect, useState } from 'react';
import data from '../resource/data.json'
import Card from '../components/Card';
import Cardv from '../components/Cardv';

const Resume = () => {
    const [activeTab, setActiveTab] = useState('experience');

    const [expereinceData, setExperienceData] = useState([])
    const [educationData, setEducationData] = useState([])

    const currentData = activeTab === 'experience' ? expereinceData : educationData;

    useEffect(()=>{
       setExperienceData(data.experience)
       setEducationData(data.education)
    }, [])


    return (
        // Resume Section
        <div id="resume" className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-18 min-h-screen">
            <div className="mx-auto max-w-4xl">
            {/* Heading */}
            <h1 className='font-bold text-3xl text-center'>My Resume</h1>
            {/* Underline */}
            <hr className='bg-primary mx-auto my-2 border-primary w-20 md:w-20 h-1'></hr>

            {/* Tabs  */}
            <div className='flex justify-center mt-5 mb-5 p-3'>
                <button 
                    onClick={()=>setActiveTab('experience')}
                    className={`p-2 rounded-l-full pl-4 border-2  font-semibold 
                        ${activeTab === 'experience' 
                        ? 'bg-black text-primary border-black' 
                        : ' text-black hover:border-primary border-gray-400 bg-gray-400'
                        }`}
                >
                    Experience
                </button>
                <button 
                    onClick={() => setActiveTab('education')}
                    className={`p-2 rounded-r-full pr-4 border-2 font-semibold
                        ${activeTab === 'education'
                        ? 'bg-black text-primary border-black'
                        : ' text-black hover:border-primary border-gray-400 bg-gray-400'
                        } `}
                >
                    Education
                </button>
            </div>

            {/* Timeline  */}
            <div className="relative pb-10">

                {/* Vertical Center Line */}
                <div className="top-0 left-1/2 absolute bg-primary rounded-t-md w-1 h-full -translate-x-1/2 transform"></div>

                {/* Timeline Items */}
                {currentData.map( (item, index) => (
                    <div key={index} className={`mb-10 [@media(min-width:944px)]:-mb-25  flex [@media(min-width:944px)]:${item.side==='left'? 'justify-start': 'justify-end'}`} > 
                        
                        {/* Card Box */}
                        <div className={`  relative w-full max-w-md ${item.side === 'left' ? 'lg:mr-auto lg:pr-10' : 'lg:ml-auto lg:pl-10'}`}>
                            {/* Horizontal Line */}
                            <div className={`hidden top-3.5 w-15 [@media(min-width:944px)]:block absolute h-1 z-3 bg-primary ${item.side === 'right' ? 'left-0' : 'right-0'}`}>
                            </div>
                            <div className='relative'>
                                <Cardv item={item} />
                            </div>
                        </div>


                    </div>

                ))}

                </div>
            </div>
        </div>
    );
};

export default Resume;
