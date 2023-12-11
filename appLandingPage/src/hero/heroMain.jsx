import Navbar from "./Navbar"
import Available from '../components/Available'
import apple from '../img/icon/apple-icon.png'
import playstore from '../img/icon/playstore-icon.png'
export default function heroMain(){
    
    return(
        <div className="hero-main">
            <Navbar/>
            <div className="hero-content">
                <div>  
                <p>Your Journey to better credit <span>Starts here</span></p>
                <p>Think the credit system is stacked against you? So do we. We'll help you get the credit you deserve.</p>
                <button className="btn-hero"><Available source={apple} store="App"/></button>
                <button className="btn-hero"><Available source={playstore} store="Play"/></button>
                </div>      
            </div>
        </div>
        
    )
}