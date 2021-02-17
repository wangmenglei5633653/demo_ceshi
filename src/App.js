import React from "react";
import {HashRouter,Route,Redirect,Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Info from "./Info";
class App extends React.Component{
    render(){
        console.log(Home)
        return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/info" component={Info}></Route>
                <Redirect to="/home"/>
            </Switch>
        </HashRouter>)
    }
}
export default App;