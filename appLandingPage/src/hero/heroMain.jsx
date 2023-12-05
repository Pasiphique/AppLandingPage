import Navbar from "./Navbar"
import Available from "./Available"
import apple from '../img/icon/apple-icon.png'
import playstore from '../img/icon/playstore-icon.png'
export default function heroMain(){
    
    return(
        <div className="hero-main">
            <Navbar/>
            <p>Your Journey to better credit <span>Starts here</span></p>
            <p>Think the credit system is stacked against you? So do we. We'll help you get the credit you deserve.</p>
            <Available source={apple} store="App"/>
            <Available source={playstore} store="Play"/>
        </div>
        
    )
}