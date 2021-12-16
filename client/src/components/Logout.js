import React from 'react';
import authService from '../services/authService';
import { Redirect} from 'react-router-dom';

const Logout = () => {
    authService.logout();
    window.location.href = '/';
   

    
}
                
            

export default Logout;