
import UserInfo from './UserInfo.json'
export default function Users(){
    return(
        <div className='profile-container'>
            {UserInfo.map((user,index)=>(
                <div className='user-profile' key={index}>
                    <p>{user.description}</p>
                    <div>
                        <img src={user.src} alt="avatar" />
                        <div className='user-name'>
                            <p>{user.name}</p>
                            <p>{user.job}</p>
                        </div>
                    </div>
            </div>
            ))}
        </div>
        
    )
}