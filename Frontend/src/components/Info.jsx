import React from 'react'

const Info = () => {
    return (
        <>
            <div className='border-[1px] w-[17rem] border-black h-[0.1rem] absolute bottom-[3.3rem] left-[1.5rem] ' ></div>
            <div className='h-[5rem] w-[20rem] mt-[7rem] ml-[1rem] mr-[1rem] p-1 absolute bottom-[4rem]'>
                <pre className='font-medium'>
                    1. Tap once to copy the URL to <br />   your clipboard.
                </pre>
                <pre className='font-medium' >
                    2. Tap twice to visit the URL.
                </pre>
            </div>

            <span className='font-extrabold absolute text-2xl bottom-[0.8rem] right-[7.5rem]'  >LYNKIE</span>
        </>
    )
}

export default Info
