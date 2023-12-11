

export default function Available({source, store}){
    return(
        <div>
            <div>
                <img src={source} alt="" className="img-icon"/>
            </div>
           <div>
                <span>Available now</span>
                <span>{store} Store</span>
           </div>
        </div>
    )
}