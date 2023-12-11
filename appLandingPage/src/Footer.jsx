import getStarted from './img/options/get-started-wo.png'
export default function Footer(){
    return (
        <footer>
            <div className="footer-section">
                <div>
                    <span>Logo</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, exercitationem.</p>
                    <button><img src={getStarted} alt="" /></button>
                </div>
                <div>
                    <div>
                        <ul>
                            <li>About us</li>
                            <li> Career</li>
                            <li>Quiz</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Legal</li>
                            <li>Terms of Service</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Linkedin</li>
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
                <span>Copyright @Pasiphique Osward 2023. All Rights Reserved.</span>
                 </div>
        </footer>
            
    )
}