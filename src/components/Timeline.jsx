import React, { useMemo } from 'react'
import Card from './Card'


const Timeline = ({ data, info = false }) => {

    return (
        <>
            < div className="relative" >
                < div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-amber-400 via-amber-400 to-transparent [@media(min-width:944px)]:block" ></div >
                <div className="space-y-8">
                    {data.map((item, index) => (
                        <div key={index} className={`flex ${item.side === "left" ? "justify-start" : "justify-end"}`}>
                            <div
                                className={`${info ? '' : '[@media(min-width:944px)]:-mb-25'} w-full [@media(min-width:944px)]:w-5/12 ${item.side === "right" && "[@media(min-width:944px)]:ml-auto"}`}
                            >
                                <Card item={item} info={info} />
                            </div>

                        </div>
                    ))}
                </div>
            </div >

        </>
    )
}

export default React.memo(Timeline);