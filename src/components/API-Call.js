import ReactDOM from 'react-dom';
import axios from 'axios';
import React from 'react';



class Axioscall extends React.Component{
         state={
          user:[],
          invalid:''
        }
        handleAPI=(e)=>{
        e.preventDefault();
        axios.get(`https://api.github.com/users/${this.props.userName}`)
        .then(res=>{
          const user=res.data;
          this.setState({user});
        }).catch(error=>{
            const invalid=error.response.statusText
            this.setState({invalid});
        });
            this.state.invalid='';
            this.state.user=[];
       };

render(){
    return(
        
        <div>
        <button className="button" onClick={this.handleAPI}>search</button>
        <h4>{this.state.invalid}</h4>
        <h4>Name: {this.state.user.name}</h4>
        <h4>UserName: {this.state.user.login}</h4>
        <h4>UserUrl: <a href={this.state.user.html_url}>{this.state.user.html_url}</a></h4>
        </div>
    )
}
}

export default Axioscall;