
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import '../css/banner.css'

const Banner = () => {
    return (
        <div className="thebanner">
                <div className="leftbanner">
                    <img src="https://imgs.search.brave.com/txpLbouEdFS2sUDJYuNCLpWUr-OSM3gZhakQI5OVA6c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC85OC81NS9z/dHVkZW50LXNjaG9v/bC1vcGVuLWJvb2st/ZWR1Y2F0aW9uLWxv/Z28tdmVjdG9yLTIw/MTI5ODU1LmpwZw" />
                </div>
                <div className="contactUs">
                       <FontAwesomeIcon icon={faDiscord} style={{color: "#0e76a8"}}></FontAwesomeIcon>
                       <h2>+91 9942345112</h2>
                </div>
        </div>
    )
}

export default Banner;