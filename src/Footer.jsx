import Logo from './img/options/logo.png'
import Info from './components/Info'
import './App.css'
export default function Footer(){
    return (
        <footer>
            <div className="footer-section">
                <div className='footer-info'> 
                    <img src={Logo} alt="" />
                    <div className='footer-info-text'>
                        <p>Designed To Make Your Life Easier.</p>
                    </div>
                    
                    <Info title = "Get Started" front ={"white"} back ="#FCA311" />
                </div>
                <div className='footer-links'>
                    <div>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li> <a href="#">Career</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>hi@appx.com</li>
                            <li>999-000-1234</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <span>&copy; 2024 Pasiphique Osward</span>
            </div>
        </footer>
            
    )
}