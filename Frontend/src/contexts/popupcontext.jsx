import { createContext, useState } from "react";
import instagram from "../assets/images/instagram.png"
import github from "../assets/images/github.png"
import twitter from "../assets/images/twitter.png"
import linkedin from "../assets/images/linkedin.png"

export const popupcontext = createContext();

export const PopupProvider = (props) => {
    //states

    const [popupbox, setPopupbox] = useState(false);
    const [image, setImage] = useState("");
    const [redirectToLinkedin, setRedirectToLinkedin] = useState(false);
    const [redirectToTwitter, setRedirectToTwitter] = useState(false);
    const [redirectToInstagram, setRedirectToInstagram] = useState(false);
    const [redirectToGithub, setRedirectToGithub] = useState(false);
    const [url, setUrl] = useState("");
    const [pic, setPic] = useState("");


    //Links/Urls to the Socials


    const LinkedInURL = "https://www.linkedin.com/in/karan-joshi-a70740271/";
    const InstaURL = "https://www.instagram.com/nasty0970/";
    const TwitterURL = "https://twitter.com/KaranJoshi128";
    const GithubURL = "https://github.com/Karanjoshi128";


    // Functions to copy the socials Urls

    const copyLinkedInURL = () => {
        navigator.clipboard.writeText(LinkedInURL);
        console.log("angu nangu pangu");
        setRedirectToLinkedin(true);
        setTimeout(() => {
            setRedirectToLinkedin(false);
        }, 3000);
    }

    const copyInstaURL = () => {
        navigator.clipboard.writeText(InstaURL);
        setRedirectToInstagram(true);
        setTimeout(() => {
            setRedirectToInstagram(false);
        }, 3000);
    }

    const copyTwitterURL = () => {
        navigator.clipboard.writeText(TwitterURL);
        setRedirectToTwitter(true);
        setTimeout(() => {
            setRedirectToTwitter(false);
        }, 3000);
    }

    const copyGithubURL = () => {
        navigator.clipboard.writeText(GithubURL);
        setRedirectToGithub(true);
        setTimeout(() => {
            setRedirectToGithub(false);
        }, 3000);
    }


    // Links to redirect to socials Urls

    const redirectLinkedInURL = () => {
        location.href = LinkedInURL;
        setRedirectToTwitter(true);
    }

    const redirectInstaURL = () => {
        location.href = InstaURL;
        setRedirectToInstagram(true);

    }

    const redirectTwitterURL = () => {
        location.href = TwitterURL;
        setRedirectToTwitter(true);

    }

    const redirectGithubURL = () => {
        location.href = GithubURL;
        setRedirectToTwitter(true);
    }





    //arrays
    const [cardinfo, setCardinfo] = useState([
        { image: linkedin, statement: redirectToLinkedin, functioncopy: copyLinkedInURL, functionredirect: redirectLinkedInURL, title: LinkedInURL },
        { image: github, statement: redirectToGithub, functioncopy: copyGithubURL, functionredirect: redirectGithubURL, title: GithubURL },
        { image: instagram, statement: redirectToInstagram, functioncopy: copyInstaURL, functionredirect: redirectInstaURL, title: InstaURL },
        { image: twitter, statement: redirectToTwitter, functioncopy: copyTwitterURL, functionredirect: redirectTwitterURL, title: TwitterURL }
    ]);




    return (
        <popupcontext.Provider value={{ popupbox, setPopupbox, image, setImage, copyLinkedInURL, LinkedInURL, InstaURL, GithubURL, TwitterURL, copyGithubURL, copyTwitterURL, copyInstaURL, redirectGithubURL, redirectTwitterURL, redirectInstaURL, redirectLinkedInURL, redirectToGithub, setRedirectToGithub, redirectToInstagram, setRedirectToInstagram, redirectToTwitter, setRedirectToTwitter, redirectToLinkedin, setRedirectToLinkedin, url, setUrl, pic, setPic, cardinfo, setCardinfo }}>
            {props.children}
        </popupcontext.Provider>
    )
}

