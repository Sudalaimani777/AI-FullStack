import twitterIcon from "../../assets/Icons/Twitter Icon.png";
import facebookIcon from "../../assets/Icons/Facebook Icon.png";
import instagramIcon from "../../assets/Icons/Instagram Icon.png";
import githubIcon from "../../assets/Icons/GitHub Icon.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-6 bg-[#161619] py-4">
      <img src={twitterIcon} alt="Twitter" className="h-6 w-6" />
      <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
      <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
      <img src={githubIcon} alt="GitHub" className="h-6 w-6" />
    </footer>
  )
}

export default Footer