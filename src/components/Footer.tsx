import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

type FooterProps = {
    lightMode: string
}

export const Footer = ({ lightMode }: FooterProps) => {
  return (
    <div className={`footer ${lightMode}`} id='contact'>
        <div className="contact-section">
            <div className={`mail ${lightMode}`}>
                <FaEnvelope />
                <a href="mailto:jdiegogarciaco@gmail.com" className={`mail ${lightMode}`}>jdiegogarciaco@gmail.com</a>
            </div>
            <div className={`socials ${lightMode}`}>
                <a href="https://github.com/dgo-gco"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/diegcia21/"><FaLinkedin /></a>
            </div>
            <p>Copyright 2023 © Diego Garcia</p>
        </div>
    </div>
  )
}
