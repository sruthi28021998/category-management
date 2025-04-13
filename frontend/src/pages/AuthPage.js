import React from 'react';
import {useParams} from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignupForm';

function Authpage(){
    const {type}=useParams();
    return(
        <div>
            <h2>{type==='login' ? 'Login' : 'Sign Up'}</h2>
            {type==='login' ? <LoginForm/> : <SignUpForm/>}
        </div>
    );
}
export default Authpage;