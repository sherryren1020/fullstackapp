import Axios from 'axios';

class authService {
    constructor(){
        this.authenticated =false
    }
    register(registrationData,callback){
        Axios.post(`${process.env.REACT_APP_API_ROOT_URL}/users/register`, registrationData)
        .then(response => {
            console.log(response)
            localStorage.setItem('token',response.headers['x-auth-token'])
            callback(null,true)
        
        })
        .catch( error => {
            callback(error.response,false)
            console.log(error.response)
        })


    }
    login(credentials,callback){
        Axios.post(`${process.env.REACT_APP_API_ROOT_URL}/users/login`, credentials)
        .then(response => {
            
            localStorage.setItem('token',response.headers['x-auth-token'])
            callback(null,true)
        })
        .catch( error => {
            console.log(error.response)
            callback(error.response,false)
        })

        this.authenticated = true
       
    }
    logout(){
        localStorage.removeItem('token')
        window.location.href = '/';
        // this.authenticated =false
       
    }

    isAuthenticated(){
        return localStorage.getItem('token') !== null
    }
}

export default new authService()