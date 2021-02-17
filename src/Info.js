import React from "react";

class Info extends React.Component{
    state={num:0}
    componentDidMount(){
        setInterval(()=>{
         let num=localStorage.getItem("num");
             this.setState({num})
        },5000)
    }
    handleClick=()=>{
        let num=localStorage.getItem("num");
        num=num+10;
        this.setState({
            num:num
        });
        localStorage.setItem("num",num);
    }
    render(){
        return<div>
            <p>about{this.state.num}</p>
            <button onClick={this.handleClick}>点击</button>
        </div>
    }
}
export default Info;