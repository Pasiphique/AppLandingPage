
export default function Info({title,front,back}){
   
    let color = front == 'black' ? 'white': 'black';
    return(
        <div className="stack-container">
            <div className="box" style={{backgroundColor:back}}></div>
            <div className="box stack-top" style={{backgroundColor: front}}><a href="#" style={{color: color}}>{title}</a></div>
        </div>
    )
}