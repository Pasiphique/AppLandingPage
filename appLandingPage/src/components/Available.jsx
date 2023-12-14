

export default function Available({source, store}){
    return(
        <button className="btn-hero">
             <div>
                <img src={source} alt="" className="img-icon"/>
            </div>
           <div className="available">
                <span >Available now</span>
                <span>{store} Store</span>
           </div>
        </button>
    )
}