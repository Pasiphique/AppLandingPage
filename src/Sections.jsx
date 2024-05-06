
import Banner from './areas/Banner'
import Download from './areas/Download'
import SectionOne from './areas/SectionOne'
import SectionTwo from './areas/SectionTwo'
import SectionThree  from './areas/SectionThree'
import Trust from './areas/Trust'
import SectionFour from './areas/SectionFour'
export default function Sections(){
    return(
    <div>
      <Banner /> 
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/> 
      <Trust/>
      <SectionFour/>
    <Download /> 
    </div>
    )
}