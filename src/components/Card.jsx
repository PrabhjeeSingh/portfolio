import React from 'react'

const Card = ({item}) => {
    return (
        <div className="bg-white shadow-md p-6 border border-gray-200 rounded-lg">
            {/* Circle */}
            <div
                className={`hidden [@media(min-width:944px)]:block absolute top-2 w-4 h-4 rounded-full bg-primary border-2 border-white ${item.side === 'left'
                    ? 'right-5 translate-x-1/2'
                    : 'left-5 -translate-x-1/2'
                    }`}
            />
          

            <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                <span className="font-medium text-blue-600 text-sm/5">{item.date}</span>
            </div>
            <h4 className="mb-3 font-semibold text-gray-700 text-md">{item.company}</h4>

            <ul className="space-y-2 pl-3 list-disc">
                {item.details.map((detail, i) => (
                    <li key={i} className="text-gray-700 text-sm">
                        {detail}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Card