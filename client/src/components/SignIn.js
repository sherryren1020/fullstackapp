import React from 'react';
import '../css/signin.css';
import Axios from 'axios';
// import  { Redirect,useHistory,withRouter } from 'react-router-dom'


class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        Axios.post(`${process.env.REACT_APP_API_ROOT_URL}/users/login`, this.state)
        .then(response => {
            console.log(response)
            localStorage.setItem('token',response.headers['x-auth-token'])

            //redirect when someone logged in
           this.props.history.push('/')
            // this.setState({ redirect: "/" });
            // let history = useHistory();
            // console.log(history)
            //  history.push("/");

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
            <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
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
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        )}
}
 
export default SignIn;