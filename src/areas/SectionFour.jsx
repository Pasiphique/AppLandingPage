import phone from '../img/iphones/iphone2.png'
import learnMore from '../img/options/learn-more-bo.png'
import Info from '../components/Info'
export default function sectionFour(){
    return(
        <div className="section">
            <div  className='fourth-section fourth'>
                <h1>We believe credit should be more accessible</h1>
                <ul>
                    <li><span>Cash whenever you </span></li>
                    <li><span>Opportunity to improve your credit</span></li>
                    <li><span>No credit score or security deposit to qualify</span></li>
                </ul>
                <Info title="Learn More" front ={"black"} back ="#FCA311" />
            </div>
            <div>
                <img src={phone} alt="" className='phone-container' />
            </div>
        </div>
    )
}
