
import phone from '../img/iphones/iphone3.png'
import learnMore from '../img/options/learn-more-ow.png'
export default function sectionTwo(){
    return(
        <div className="section section-two">
            <div>
                <h1>External Checking Account</h1>
                <p>Keep your current bank and have your Empower Cash Advance or Empower Thrive funds deposited to your primary bank account.</p>
                <button><img src={learnMore} alt="" /></button>
            </div>
            <div>
            <img src={phone} alt="" className='phone-container' />
            </div>
            
        </div>
    )
}