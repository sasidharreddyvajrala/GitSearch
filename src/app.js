import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
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
            <div className="container">
                <div>
                <header className="header header__title">GitSearch</header>
                <form>
                <input type='search' placeholder='Enter Username' onChange={this.handleSearch} className="search"/>
                <p>{this.state.userName}</p>
                <Axioscall userName={this.state.userName}/>
                </form>
                </div>
            </div>
          
        )
    }
}

ReactDOM.render(<Search/>,document.getElementById('app'));




