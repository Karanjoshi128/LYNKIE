import React from 'react'
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

    const copyLinkedInURL = () => {
        navigator.clipboard.writeText(LinkedInURL);
    }
    const copyInstaURL = () => {
        navigator.clipboard.writeText(InstaURL);
    }
    const copyTwitterURL = () => {
        navigator.clipboard.writeText(TwitterURL);
    }
    const copyGithubURL = () => {
        navigator.clipboard.writeText(GithubURL);
    }



    return (
        <div className='h-[30rem] w-[20rem] bg-slate-300 rounded-xl flex flex-wrap justify-start gap-0 content-start relative shadow-2xl'>
            <div className='bg-white h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-md m-[1.2rem] mt-[1.5rem]  shadow-md hover:shadow-xl cursor-pointer'  onClick={copyLinkedInURL} >
                <img src={linkedin} alt="" className='h-[2.5rem] w-[2.5rem] shadow-xl ' defaultValue={LinkedInURL} />
            </div>
            <div className='bg-white h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-md m-[1rem] mt-[1.5rem] shadow-md hover:shadow-xl cursor-pointer' onClick={copyGithubURL} >
                <img src={github} alt="" className='h-[2.5rem] w-[2.5rem] ' />
            </div>
            <div className='bg-white h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-md m-[1rem] mt-[1.5rem] shadow-md hover:shadow-xl cursor-pointer' onClick={copyInstaURL} >
                <img src={instagram} alt="" className='h-[2.5rem] w-[2.5rem] ' />
            </div>
            <div className='bg-white h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-md m-[1rem] mt-[1.5rem] shadow-md hover:shadow-xl cursor-pointer' onClick={copyTwitterURL} >
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
// position: absolute;
//     border: 2px solid black;
//     width: 15rem;
//     bottom: 3rem;
//     left: 2.5rem;
// }