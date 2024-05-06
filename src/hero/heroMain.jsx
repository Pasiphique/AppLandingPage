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
                    <p className="hero-text">Your Journey to Better Credit <span>Starts Here</span></p>
                    <p className="hero-text-think">Think the credit system is stacked against you? So do we. We'll help you get the credit you deserve.</p>
                    <div className="btn-container">
                        <Available source={apple} store="App"/>
                        <Available source={playstore} store="Play"/>
                    </div>
                </div>      
            </div>
        </div>   
    )
}