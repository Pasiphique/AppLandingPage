import phone from '../img/iphones/iphone1.png'
import getStarted from '../img/options/get-started-wo.png'
export default function heroPhone(){
    return(
        <div className='hero-phone'>
            <div className='hero-img-content'><button><img src={getStarted} alt="" /></button></div>
            <div className='phone-contents'><img src={phone} alt="hero-phone" className='phone-img-hero'/></div>
        </div>
    )
}