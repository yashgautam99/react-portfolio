import logo from "../assets/YG.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 justify-between">
        <a href="/">
          <img className="mx-0 w-20" src={logo} alt="logo" />
        </a>
      </div>

      <div className="m-8 flex items-center gap-4 text-2xl">
        <a
          href="mailto:yash99gautam@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdMail />
        </a>
        <a
          href="https://www.linkedin.com/in/yashgautam99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yashgautam99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/yashgautam2502"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
