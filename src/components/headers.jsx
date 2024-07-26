import '../css/header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Headers = () => {
    const iconStyle = {
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        fontSize: "24px",
        margin: "10px",
        color: "#3b5998", // Default color, can be adjusted per icon
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      };
    return (
        <div className='backgroundHead'>
           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} style={{ ...iconStyle, color: "#3b5998" }} />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} style={{ ...iconStyle, color: "#00acee" }} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} style={{ ...iconStyle, color: "#E1306C" }} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} style={{ ...iconStyle, color: "#0e76a8" }} />
      </a>
    </div>
        </div>
    )
}

export default Headers;