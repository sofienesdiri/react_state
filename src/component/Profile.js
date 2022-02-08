import React from "react"
class Profile extends React.Component{
    constructor(){
        super()
        this.state={
            fullName : "Sofiene Sdiri",
             bio : "Hi my name is Sofiene, i'm 27 years old and i'm a fullstack developper",
             profession : "Fullstack developper"

        }
    }
    render(){
    return(
        <div>
            <h1>{this.state.fullName}</h1>
            <h2>{this.state.profession}</h2>
            <p>{this.state.bio}</p>
            <img src="/pixml.png" />
        
        </div>
    )
    }
}
export default Profile