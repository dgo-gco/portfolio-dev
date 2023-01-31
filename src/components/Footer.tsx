import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

type FooterProps = {
    lightMode: string
}

export const Footer = ({ lightMode }: FooterProps) => {
  return (
    <div className={`footer ${lightMode}`}>
        <div className="contact-section">
            <div className={`mail ${lightMode}`}>
                <FaEnvelope />
                <a href="mailto:jdiegogarciaco@gmail.com" className={`mail ${lightMode}`}>jdiegogarciaco@gmail.com</a>
            </div>
            <div className={`socials ${lightMode}`}>
                <FaGithub />
                <FaLinkedin />
            </div>
            <p>Copyright 2023 © Diego Garcia</p>
        </div>
    </div>
  )
}
