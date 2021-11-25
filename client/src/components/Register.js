import React from 'react';
import '../css/signin.css';
import Axios from 'axios';
import NavBar from './NavBar';
import  { Redirect,useHistory } from 'react-router-dom'


class Register extends React.Component {
    constructor(props){
        super(props)
        this.state={
            firtName:'',
            lastName:'',
            email:'',
            password:'',
            redirect: ''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        Axios.post('http://localhost:5000/api/users/register', this.state)
        .then(response => {
            console.log(response)
        localStorage.setItem('token',response.headers['x-auth-token'])
        //    return <NavBar name={this.state.firtName} />
        this.props.history.push('/')
        })
        .catch( error => console.log(error.response))

    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render (){
        return(
        <form className="form-signin" onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Please Register</h1>
            <label htmlFor="inputEmail" className="sr-only">Fisrt Name</label>
            <input onChange={this.handleChange} 
            type="text" 
            name="firstName" 
            id="inputFirst" 
            className="form-control" 
            placeholder="Fisrt Name"
            // value={this.state.email}
             required autoFocus />
              <label htmlFor="inputEmail" className="sr-only">Last Name</label>
            <input onChange={this.handleChange} 
            type="text" 
            name="lastName" 
            id="inputLast" 
            className="form-control" 
            placeholder="Last Name"
            // value={this.state.email}
             required autoFocus />
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input onChange={this.handleChange} 
            type="email" 
            name="email" 
            id="inputEmail" 
            className="form-control" 
            placeholder="Email address"
            // value={this.state.email}
             required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input  onChange={this.handleChange} 
            type="password" 
            name="password" 
            id="inputPassword" 
            className="form-control" 
            placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
        </form>
        )}
}
 
export default Register;