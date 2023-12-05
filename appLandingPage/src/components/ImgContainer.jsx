
import orangeBackground from '../img/rectangle.png'
export default function ImgContainer({iphone}){
    return(
        <div>
            <img src={iphone} alt="iphone" />
            <img src={orangeBackground} alt="" />
        </div>
    )
}
// Css grid with the main div
// 6 x 5 grid
// orange stars from row 3 -5 and full columns
// iphone starts from full rows and column at 2 - 4
// z-index of orange to go backwards