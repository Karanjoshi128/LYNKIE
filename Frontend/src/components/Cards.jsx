import React from 'react'

const Cards = (props) => {
    return (
        <div className='bg-white h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-md m-[1rem] mt-[1.5rem]  shadow-md hover:shadow-2xl cursor-pointer' onClick={props.functioncopy} onDoubleClick={props.functionredirect} >
            <img src={props.image} alt="Linkedin Logo" className='h-[2.5rem] w-[2.5rem] shadow-xl' title={props.title} onClick={props.functioncopy} onDoubleClick={props.functionredirect} />
        </div>
    )
}

export default Cards
