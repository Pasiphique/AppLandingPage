import behance from '../img/banner-text/behance.png'
import dribble from '../img/banner-text/dribble.png'
import webflow from '../img/banner-text/webflow.png'
import youtube from '../img/banner-text/youtube.png'
export default function Banner(){
    return(
        <div className="banner">
        <span><img className='img-icon' src={behance} alt="behance" /></span>
        <span><img className='img-icon' src={dribble} alt="dribble" /></span>
        <span> <img className='img-icon' src={webflow} alt="webflow" /></span>
        <span><img  className='img-icon'src={youtube} alt="youtube" /></span>
        </div>
    )
}