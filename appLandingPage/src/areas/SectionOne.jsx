
import phone from '../img/iphones/iphone3.png'
import learnMore from '../img/options/learn-more-bo.png'
export default function sectionOne(){
    return(
        <div className="section">
             <div>
                <img src={phone} alt="" className='phone-container' />
            </div>
            <div>
                <h1>Empower Cash Advance</h1>
                <ul>
                    <li><span>Receive up to $250 today</span></li>
                    <li><span>No interest, no late fees, no credit checks</span></li>
                    <li><span>Instant delivery</span></li>
                </ul>
                <div><button><img src={learnMore} alt="" /></button></div>
            </div>
           
        </div>
    )
}