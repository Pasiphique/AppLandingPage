
import { useState } from 'react'
import UserInfo from './UserInfo.json'
export default function Users(){
   
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextStory = ()=>{
        setCurrentIndex((prevIndex) => (prevIndex +1) % UserInfo.length);
    }
    const handlePrevStory = ()=>{
        setCurrentIndex((prevIndex) => (prevIndex -1 == -1) ? UserInfo.length-1: prevIndex -1);
    }

    return(
        <div className='profile-container'>
            <div className='user-profile' key={UserInfo[currentIndex].index}>
                    <p >{UserInfo[currentIndex].description}</p>
                    <div className='profile-content'>
                        <img src={UserInfo[currentIndex].src} alt="avatar" />
                        <div className='user-name'>
                            <p>{UserInfo[currentIndex].name}</p>
                            <p>{UserInfo[currentIndex].job}</p>
                        </div>
                    </div>
            </div>
            <div className='story-btn'>
                <button onClick={handlePrevStory}>&#8610;</button>
                <button onClick={handleNextStory}>&#8611;</button>
            </div>
            
        </div>
        
    )
}