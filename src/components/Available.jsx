

export default function Available({source, store}){
    return(
        <button className="btn-hero">
             <div>
                <img src={source} alt="" className="img-icon"/>
            </div>
           <div className="available">
                <a href="#">
                    <span>{store} Store</span>
                </a>               
           </div>
        </button>
    )
}