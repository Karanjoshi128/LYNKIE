import React, { useContext, useEffect, useState } from 'react'

import AddMore from "../assets/images/Add.png"
import Addpopup from './Addpopup'
import { popupcontext } from '../contexts/popupcontext'
import Cards from './Cards'
import Info from './Info'


const Linkcontainer = () => {
    const [length, setLength] = useState("");

    const { popupbox, setPopupbox, copyLinkedInURL, LinkedInURL, InstaURL, GithubURL, TwitterURL, copyGithubURL, copyTwitterURL, copyInstaURL, redirectGithubURL, redirectTwitterURL, redirectInstaURL, redirectLinkedInURL, redirectToGithub, redirectToInstagram, redirectToTwitter, redirectToLinkedin, url, setUrl, pic, setPic, cardinfo } = useContext(popupcontext);


    const handlePopupbox = () => {
        setPopupbox(!popupbox);
    }

    let cardinfo_length = cardinfo.length;

    useEffect(() => {
        if (cardinfo_length < 8 || cardinfo_length == 8) {
            setLength(true);
        }
        else {
            setLength(false);
        }
    }, [cardinfo_length]);



    return (
        <div className='h-[30rem] w-[19.5rem] bg-slate-300 rounded-xl flex flex-wrap justify-start gap-0 content-start relative shadow-2xl'>
            {cardinfo.map((card, key) => <Cards key={key} image={card.image} statement={card.statement}  title={card.title}  functioncopy={card.functioncopy} functionredirect={card.functionredirect} />)}

            {length && <div className='bg-white h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-md m-[1rem] mt-[1.5rem] shadow-md hover:shadow-xl cursor-pointer'>
                <img src={AddMore} alt="" className='h-[2.5rem] w-[2.5rem]' onClick={handlePopupbox} />
            </div>
            }


            <Info />
            {popupbox && <Addpopup />}
        </div>
    )
}

export default Linkcontainer
