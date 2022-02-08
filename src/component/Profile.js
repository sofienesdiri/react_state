import React from "react"
class Profile extends React.Component{
    constructor(){
        super()
        this.state={
            fullName : "Sofiene Sdiri",
            bio : "Hi my name is Sofiene, i'm 27 years old and i'm a fullstack developper",
            profession : "Fullstack developper",
            count:0

        }
    }
    componentDidMount(){
        setInterval(()=>this.setState({count:this.state.count+1}),1000)
        
        }

    render(){
    return(
        <div>
            <h3>{this.state.count}</h3>
            <h1>{this.state.fullName}</h1>
            <h2>{this.state.profession}</h2>
            <p>{this.state.bio}</p>
            <img src="./pixml.png" alt="Not found"/>
        
        </div>
    )
    }
}
export default Profile