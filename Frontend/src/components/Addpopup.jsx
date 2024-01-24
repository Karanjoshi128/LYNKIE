import React, { useContext, useState } from 'react'
import Upload from "../assets/images/Upload_image.png"
import { popupcontext } from '../contexts/popupcontext'
import linkedin from "../assets/images/linkedin.png"


const Addpopup = () => {

    const { popupbox, setPopupbox, image, setImage, url, setUrl, pic, setPic, cardinfo, setCardinfo, redirectToLinkedin, redirectLinkedInURL, copyLinkedInURL } = useContext(popupcontext);
    const handlePopupbox = () => {
        setPopupbox(!popupbox);
        setImage("");
        setUrl("");
    }


    const handleimagechange = (event) => {
        const file = event.target.files[0];
        setImage(URL.createObjectURL(file));
        setPic(URL.createObjectURL(file));
    }


    const handleUrl = (e) => {
        setUrl(e.target.value);

    }
    const handleCopyToUrl = (event) => {
        let target = event.target;
        const title = target.getAttribute('title');
        // console.log("Copying");
        navigator.clipboard.writeText(title);
        console.log(title);
    }

    const handleRedirectToUrl = (event) => {
        let target = event.target;
        const title = target.getAttribute('title');
        // console.log("redirecting");
        location.href = title;
    }

    const handleSubmit = (e) => {
        cardinfo.push({ image: image, title: url, functioncopy: handleCopyToUrl , functionredirect : handleRedirectToUrl}
        );
    }



    if (popupbox) {
        return (
            <div className='w-[100vw] h-[100vh] fixed top-0 right-0 left-0 bottom-0'>
                <div className='w-[100vw] h-[100vh] fixed top-0 right-0 left-0 bottom-0 bg-[#e3e3e3] bg-opacity-50 flex items-center justify-center z-10'>
                    <div className="bg-white h-[14rem] w-[16rem] rounded-lg flex items-center flex-col z-20">
                        <label htmlFor='imageonly' className='border-2  h-[7rem] w-[15rem] border-grey-100 flex justify-center items-center border-t-0 border-l-0 border-r-0 pointer-events-auto cursor-pointer'>
                            <div className='w-[5rem] h-[5rem] border-rose-100 border-2 rounded-xl'>
                                {image ? (<img src={image} alt="Upload your social image" className='w-[5rem] h-[5rem]' />) : (<img src={Upload} alt="Upload your social image" className='w-[5rem] h-[5rem] object-cover' />)}
                                <input type="file" id='imageonly' className='hidden' accept=".png, .jpg, .jpeg" onChange={handleimagechange} />
                            </div>
                        </label>
                        <input type="search" value={url} onChange={handleUrl} className='border-2 rounded-md w-[14rem] mt-[1rem] border-green-200 placeholder:italic placeholder:text-slate-400  hover:border-green-300' placeholder='         Paste your Link here!' />
                        <div className="flex gap-[2.5rem] pl-[2rem] pr-[2rem] pb-[1rem] pt-[1rem]">
                            <button className='w-[5rem] h-[2rem] bg-[#a1bbdf] hover:bg-slate-400 rounded-lg text-white' onClick={handlePopupbox}>Cancel</button>
                            <button className='w-[5rem] h-[2rem] bg-[#892be2a2] hover:bg-[#8A2BE2] rounded-lg text-white' onClick={() => { handlePopupbox(); handleSubmit(); }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addpopup
