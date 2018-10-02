import React from 'react';
import ReactDOM from 'react-dom';
import Axioscall from './components/API-Call';



class Search extends React.Component{
    state={
       userName:''
    }
    handleSearch=(e)=>{
        e.preventDefault();
        this.setState({userName:e.target.value});
    };
    render(){
        return(
            <div>
            <form >
            <input type='search' placeholder='search' onChange={this.handleSearch}/>
            <p>{this.state.userName}</p>
            <Axioscall userName={this.state.userName}/>
            </form>
            </div>
        )
    }
}

ReactDOM.render(<Search/>,document.getElementById('app'));