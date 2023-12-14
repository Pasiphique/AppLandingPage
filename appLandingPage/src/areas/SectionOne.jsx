
import phone from '../img/iphones/iphone3.png'
import learnMore from '../img/options/learn-more-bo.png'
export default function sectionOne(){
    return(
        <div className="section">
             <div>
                <img src={phone} alt="" className='phone-container' />
            </div>
            <div className='content-section'>
                <h1>Empower Cash Advance</h1>
                <ul>
                    <li>Receive up to $250 today</li>
                    <li>No interest, no late fees, no credit checks</li>
                    <li>Instant delivery</li>
                </ul>
                <div><button><img src={learnMore} alt="" /></button></div>
            </div>
           
        </div>
    )
}