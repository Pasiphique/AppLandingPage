
import phone from '../img/iphones/iphone3.png'
import learnMore from '../img/options/learn-more-ow.png'
import Info from '../components/Info'
export default function sectionTwo(){
    return(
        <div className="section section-two">
            <div className='section-two-infoContainer'>
                <div className='section-two-info'>
                    <h1 className='section-two-header'>External Checking Account</h1>
                    <p>Keep your current bank and have your Empower Cash Advance or Empower Thrive funds deposited to your primary bank account.</p>
                    <Info title="Learn More" front ={"white"} back ="#FCA311" />
                </div>
            </div>
            <div>
                <img src={phone} alt="" className='phone-container' />
            </div>
            
        </div>
    )
}