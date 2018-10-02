import ReactDOM from 'react-dom';
import axios from 'axios';
import React from 'react';



class Axioscall extends React.Component{
         state={
          user:[]
        }
        handleAPI=(e)=>{
        e.preventDefault();
        axios.get(`https://api.github.com/users/${this.props.userName}`)
        .then(res=>{
          const user=res.data;
          this.setState({user});
        })
       };

render(){
    return(
        <div>
        <button onClick={this.handleAPI}>search</button>
        <h4>Name:{this.state.user.name}</h4>
        <h4>UserName:{this.state.user.login}</h4>
        <h5>UserUrl:<a href={this.state.user.html_url}>{this.state.user.html_url}</a></h5>
        </div>
    )
}
}

export default Axioscall;
//ReactDOM.render(<Axioscall />,document.getElementById('app'));
