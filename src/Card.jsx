import React from 'react'

function Card({elem,index}) {
  return (
    <div className='h-72 w-56 bg-transparent rounded-xl flex flex-col justify-center items-center bg-black-500 hover:bg-blue-700 bg-gradient-to-r from-indigo-500 text-white font-bold py-2 px-4  border border-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105' >
        
        <div className='w-3/4 h-2/3 overflow-hidden'> <img className='h-full w-full object-cover' src={elem.imageURL} alt="" /> </div>
        <h1>{elem.id}</h1>
        <p>{elem.caption}</p>
    </div>
  )
}

export default Card