import Available from '../components/Available'
import apple from '../img/icon/apple-icon.png'
import playstore from '../img/icon/playstore-icon.png'
export default function Download(){
    return(
        <div className="download orangebg">
            <h1>Download AppX to get started</h1>
            <div className='download-btn'>
                <Available source={apple} store="App"/>
                <Available source={playstore} store="Play"/>
            </div>
            
        </div>
    )
}