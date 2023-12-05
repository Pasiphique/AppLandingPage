import phone from '../img/iphones/iphone1.png'
import getStarted from '../img/options/get-started-wo.png'
export default function heroPhone(){
    return(
        <div className='hero-phone'>
            <img src={getStarted} alt="" />
            <img src={phone} alt="hero-phone" />
        </div>
    )
}