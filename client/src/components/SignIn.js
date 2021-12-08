import React from 'react';
import '../css/signin.css';

// import  { Redirect,useHistory,withRouter } from 'react-router-dom'
import authService from '../services/authService'
import Joi, { errors } from 'joi-browser'


class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state={
            credentials:{
               email:'',
            password:'' 
            },
            errors:[]
        }
    }

    validationSchema = {
        email:Joi.string().required(),
        password:Joi.string().required()
    }

    handleSubmit=(e)=>{
        e.preventDefault();
       const result= Joi.validate(this.state.credentials,this.validationSchema,{abortEarly:false})
       console.log(result.error)
       const errors=[]
       if(result.error){
           
        result.error.details.forEach(detail =>{
              const validationError = {}
              validationError.message = detail.message
              validationError.field = detail.path[0]
              errors.push(validationError)

          }) 
          
       }
       
       this.setState({ errors:errors})
          // same with this.setState({ errors})
       

        authService.login(this.state.credentials,(err,success)=>{
            if(!success){
                console.log(err)
            }
        
            this.props.history.push('/')
        })

    }
    handleChange =(e)=>{
        const credentials ={...this.state.credentials}
        credentials[e.target.name]=e.target.value
        this.setState({
            credentials:credentials

            }
            // [e.target.name]:e.target.value
        )
    }
    render (){
        return(
        <form className="form-signin" onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input onChange={this.handleChange} 
            type="text" 
            name="email" 
            id="inputEmail" 
            className="form-control" 
            placeholder="Email address"
            // value={this.state.email}
              autoFocus />
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