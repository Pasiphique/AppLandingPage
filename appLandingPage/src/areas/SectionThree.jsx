

import phone from '../img/iphones/iphone2.png'
export default function sectionThree(){
    return(
        <div className="section">
            <div>
                <img src={phone} alt="" className='phone-container'/>
            </div>
            <div>
                <h1>Use and trusted by a community of millions</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit in consequat sollicitudin adipiscing facilisi sit et hendrerit diam</p>
                <div>
                    <div>
                        <span>12+</span>
                        <span>Years experience</span>
                    </div>
                    <div>
                        <span>90%</span>
                        <span>Committed Users</span>
                    </div>
                    <div>
                        <span>10M</span>
                        <span>Active Users</span>
                    </div>
                    <div>
                        <span>250M</span>
                        <span>Total Transactions</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}