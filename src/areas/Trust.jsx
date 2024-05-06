import Users from "../components/Users"
export default function Trust(){
    return(
        <div className="trust section-two">
            <div>Trusted by millions of customers.</div>
            <div>
                <Users name="Bob" /> 
                <Users name="Dave" /> 
                <Users name="Eddy" /> 
                <Users name="Frank" />  
            </div>
        </div> 
    )
}