import React from 'react';
import '../css/signin.css';

// import  { Redirect,useHistory,withRouter } from 'react-router-dom'
import authService from '../services/authService'
import Joi from 'joi-browser'


class SignIn extends React.Component {
   state={
            credentials:{
                email:'',
                password:'' 
            },
            errors:[]
        }
    

    validationSchema = {
        email:Joi.string().email().required().label('Email Address'),
        password:Joi.string().required().label('Password')
    }

    handleSubmit=(e)=>{
        e.preventDefault();
       const result= Joi.validate(this.state.credentials,
                                this.validationSchema,{abortEarly:false})
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
       
       this.setState({ errors})
          // same with this.setState({ errors:errors})
          if(errors.length === 0){
              authService.login(this.state.credentials,(err,success)=>{
               if(!success) {
                console.log(err)
                const errors =[]
                const error ={}

                switch(err.status){
                    case 401:{
                        error.message ="user not exist!"
                        break;
                    }
                    case 400:{
                        error.message ="Incorrect email or password"
                        break;
                    }
                }
                    errors.push(error)
                    this.setState({errors})
                   return ;
                } 
            this.props.history.push('/')
              })
          }
       

    }
    handleChange =(e)=>{
        const credentials ={...this.state.credentials}
        credentials[e.target.name]=e.target.value
        this.setState({
            credentials:credentials

            }
            
        )
    }
    render (){
        return(
            <React.Fragment>
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
              {/* {<div className='alert alert-danger mt-2'>
                  <ul>
                  {this.state.errors
                  .filter(error =>error.field==='email')
                  .map((error,i) => {<li key={i}>{error.message}</li>})}
                  </ul>
                  </div>
              } */}
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input  onChange={this.handleChange} 
            type="password" 
            name="password" 
            id="inputPassword" 
            className="form-control" 
            placeholder="Password" />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            {this.state.errors.length >0 &&
            <div className='alert alert-danger mt-2'>
                <ul>
                    {this.state.errors.map((error,i) =>{
                        return <li key={i}>{error.message}</li>
                    })}
                </ul>

            </div> }
        </form>
        
        </React.Fragment>
        )}
}
 
export default SignIn;