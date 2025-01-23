
import logo from "../img/options/logo.png"
export default function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <li><img src={logo} alt="" /></li>
                <li>About Us</li>
                <li>Career</li>
                <li>Support</li>
            </ul>
        </nav>
    )
}