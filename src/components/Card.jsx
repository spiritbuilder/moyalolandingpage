import React from 'react'

function Card({word, name}) {
    return (
        <div className="p-3 blueshadow min-w-max flex flex-col justify-center items-center">
            <p className="text-sm font-light">{word}</p>
            <p className='font-semibold text-lg my-4' >{name}</p>
        </div>
    )
}

export default Card
