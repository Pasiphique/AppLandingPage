import phone from '../img/iphones/iphone1.png'
import getStarted from '../img/options/get-started-wo.png'
import Info from '../components/Info'
export default function heroPhone(){
    return(
        <>
        <div className='hero-phone'>
           
            <Info title="Get Started" front ={"white"} back ="#FCA311"/>
           <div className='phone-contents'><img src={phone} alt="hero-phone" className='phone-img-hero'/></div>
       </div>
       
        </>
        
    )
}