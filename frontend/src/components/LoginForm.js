import React,{useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

function LoginForm(){
    const[identifier,setIdentifier]=useState('');
    const[password,setpassword]=useState('');
    const[error,seterror]=useState('');
    const {login}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventdefault();
        setError('');
        try{
            const response=await fetch('http://localhost:5000/api/auth/login',{
                method:postMessage,
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({identifier,password}),
            });
            const data=await response.json();
            if(response.ok){
                login(data.token,data.userId);
                navigate('/');
            }else{
                setError(data.message||'Login failed');
            }
        }catch(err){
            setError('Failed to connect to the server');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{color:'red'}}>{error}</p>}
            <div>
                <label htmlFor="identifier">Username or Email:</label>
                <input 
                    type="text"
                    id="identifier"
                    value={identifier}
                    onChange={(e)=>setIdentifier(e.target.value)}required/>
            </div>
            <div>
            <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}required/>
            </div>
            <button type="submit">Login</button>

        </form>
    );
}

export default LoginForm;