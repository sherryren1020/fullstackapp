import React, { Component } from 'react'
import {
   Route,Redirect
  } from "react-router-dom";
import authService from '../services/authService';

const ProtectedRoute =({component:Component,...rest})=>{
    return (
        <Route {...rest} render={
            props => {
                if(authService.isAuthenticated()){
                    return <Component {...props}/>
                }else{
                    return(
                        <Redirect to={{
                            pathname:"/signin",
                            referer:props.location.pathname
                        }} />
                    )
                }
            }
        }/>
    )
}
export default ProtectedRoute


// export const ProtectedRoute = ({component:Component,...rest})=>{
//     return (
//         <Route {...rest} 
//         render={
//             (props)=>{
//                 if(auth.isAuthenticated()){
//                 return<Component {...props} />}
//                 else{
//                     return
//                     <Redirect 
//                     to={{
//                             pathname:"/",
//                             state:{
//                                 from:props.location
//                             }
//                         }}
//                         />
                        
//                 }
//             }
//         }/>
//     )
// }