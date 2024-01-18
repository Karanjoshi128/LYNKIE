import React, { useState } from 'react'
import instagram from "../assets/images/instagram.png"
import github from "../assets/images/github.png"
import twitter from "../assets/images/twitter.png"
import linkedin from "../assets/images/linkedin.png"
import AddMore from "../assets/images/Add.png"

const Linkcontainer = () => {

    const InstaURL = "https://www.instagram.com/nasty0970/";
    const LinkedInURL = "https://www.linkedin.com/in/karan-joshi-a70740271/";
    const TwitterURL = "https://twitter.com/KaranJoshi128";
    const GithubURL = "https://github.com/Karanjoshi128";

    const [redirectToLinkedin, setRedirectToLinkedin] = useState(false);
    const [redirectToTwitter, setRedirectToTwitter] = useState(false);
    const [redirectToInstagram, setRedirectToInstagram] = useState(false);
    const [redirectToGithub, setRedirectToGithub] = useState(false);



    // functions to copy socials


    const copyLinkedInURL = () => {
        navigator.clipboard.writeText(LinkedInURL);
        setRedirectToLinkedin(true);
    }
    const copyInstaURL = () => {
        navigator.clipboard.writeText(InstaURL);
        setRedirectToInstagram(true);
    }
    const copyTwitterURL = () => {
        navigator.clipboard.writeText(TwitterURL);
        setRedirectToTwitter(true);
    }
    const copyGithubURL = () => {
        navigator.clipboard.writeText(GithubURL);
        setRedirectToGithub(true); 
    }

    
    //functions to redirect to socials


    const redirectLinkedInURL = () => {
        location.href = LinkedInURL;
        setRedirectToLinkedin(false);
    }
    const redirectInstaURL = () => {
        location.href = InstaURL;
        setRedirectToInstagram(false);
    }
    const redirectTwitterURL = () => {
        location.href = TwitterURL;
        setRedirectToTwitter(fasle);
    }
    const redirectGithubURL = () => {
        location.href = GithubURL;
        setRedirectToGithub(false);
    }

    return (
        <div className='h-[30rem] w-[20rem] bg-slate-300 rounded-xl flex flex-wrap justify-start gap-0 content-start relative shadow-2xl'>
            <div className='bg-white h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-md m-[1.2rem] mt-[1.5rem]  shadow-md hover:shadow-xl cursor-pointer' onClick={redirectToLinkedin ? redirectLinkedInURL : copyLinkedInURL} >
                <img src={linkedin} alt="" className='h-[2.5rem] w-[2.5rem] shadow-xl '/>
            </div>
            <div className='bg-white h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-md m-[1rem] mt-[1.5rem] shadow-md hover:shadow-xl cursor-pointer' onClick={redirectToGithub ? redirectGithubURL : copyGithubURL} >
                <img src={github} alt="" className='h-[2.5rem] w-[2.5rem] ' />
            </div>
            <div className='bg-white h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-md m-[1rem] mt-[1.5rem] shadow-md hover:shadow-xl cursor-pointer' onClick={redirectToInstagram ? redirectInstaURL : copyInstaURL} >
                <img src={instagram} alt="" className='h-[2.5rem] w-[2.5rem] ' />
            </div>
            <div className='bg-white h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-md m-[1rem] mt-[1.5rem] shadow-md hover:shadow-xl cursor-pointer' onClick={redirectToTwitter ? redirectTwitterURL :  copyTwitterURL} >
                <img src={twitter} alt="" className='h-[2.5rem] w-[2.5rem] ' />
            </div>
            <div className='bg-white h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-md m-[1rem] mt-[1.5rem] shadow-md hover:shadow-xl cursor-pointer'>
                <img src={AddMore} alt="" className='h-[2.5rem] w-[2.5rem] ' />
            </div>
            <div className='border-[1px] w-[17rem] border-black h-[0.1rem] absolute bottom-[3.3rem] left-[1.5rem] ' ></div>

            <span className='font-extrabold absolute text-2xl bottom-[0.8rem] right-[7.5rem]'  >LYNKIE</span>
        </div>
    )
}

export default Linkcontainer
