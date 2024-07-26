import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css'

const Navbar = ()=>{
    return (
        <div>
            <navbar>
                <nav className="navbar-background">
                    <span>Home</span>
                    <Dropdown>
                        <Dropdown.Toggle className="dropdowncolor" variant="primary" id="dropdown-basic">
                            Courses
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Spirituality</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Character Building</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <span>About Us</span>
                    <span>Gallery</span>
                    <span>ContactUs</span>
                    <span>Why Vaikuntha</span>
                </nav>
            </navbar>
        </div>
    )
}
export default Navbar