
import ImgContainer from '../components/ImgContainer'
import phone from '../img/iphones/iphone3.png'
import learnMore from '../img/options/learn-more-ow.png'
export default function sectionTwo(){
    return(
        <div className="section">
            <div>
                <h1>External Checking Account</h1>
                <p>Keep your current bank and have your Empower Cash Advance or Empower Thrive funds deposited to your primary bank account.</p>
                <img src={learnMore} alt="" />
            </div>
            <div>
                <ImgContainer iphone={phone} />
            </div>
        </div>
    )
}