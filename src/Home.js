import React from "react";

class Home extends React.Component{
    state={
        num:0
    }
    componentDidMount(){
        setInterval(()=>{
         let num=localStorage.getItem("num");
         console.log(num)
         if(num){
             this.setState({num})
         }else{
            localStorage.setItem("num",this.state.num);
         }
        },5000)
    }
    render(){
        return<div>
            <p>home{this.state.num}</p>
            <a href="#/about" target="_blank">about</a>
            <br/>
            <a href="#/info" target="_blank">详情</a>
        </div>
    }
}
export default Home;