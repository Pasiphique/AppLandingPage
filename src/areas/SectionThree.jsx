

import phone from '../img/iphones/iphone2.png'
export default function sectionThree(){
    return(
        <div className="section">
            <div>
                <img src={phone} alt="" className='phone-container'/>
            </div>
            <div className='section-three'>
                <h1>Use and trusted by a community of millions</h1>
                <div className='percentages'>
                    <div >
                        <span className='total'>12+</span>
                        <span className='more-info'>Years experience</span>
                    </div>
                    <div>
                        <span className='total'>90%</span>
                        <span className='more-info'>Committed Users</span>
                    </div>
                    <div>
                        <span className='total'>10M</span>
                        <span className=' more-info'>Active Users</span>
                    </div>
                    <div>
                        <span className='total'>250M</span>
                        <span className='more-info'>Total Transactions</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}