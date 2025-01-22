
import { useEffect, useState } from 'react'
import UserInfo from './UserInfo.json'
export default function Users(){
   
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextStory = ()=>{
        setCurrentIndex((prevIndex) => (prevIndex +1) % UserInfo.length);
    }

    return(
        <div className='profile-container'>
                <div className='user-profile' key={UserInfo[currentIndex].index}>
                    <p>{UserInfo[currentIndex].description}</p>
                    <div>
                        <img src={UserInfo[currentIndex].src} alt="avatar" />
                        <div className='user-name'>
                            <p>{UserInfo[currentIndex].name}</p>
                            <p>{UserInfo[currentIndex].job}</p>
                        </div>
                    </div>
            </div>
            <button onClick={handleNextStory}> Next Story</button>
        </div>
        
    )
}