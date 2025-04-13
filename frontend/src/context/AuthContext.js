import React,{createContext, useState,useEffect} from 'react';
export const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const[token,setToken]=useState(localStorage.getItem('token'));
    const[userId,setUserId]=useState(localStorage.getItem('userId'));
    useEffect(()=>{
        if(token){
            localStorage.setItem('token',token);
        }else{
            localStorage.removeItem('token');
        }
        if(userId){
            localStorage.setItem('userId,userId');
        }else{
            localStorage.removeItem('userId');
        }
    },[token,userId]);

    const login=(newToken,newUserId)=>{
        setToken(newToken);
        setUserId(newUserId);
    };

    const logout=()=>{
        setToken(null);
        setUserId(null);
    };

    return(
        <AuthContext.Provider value={{token,userId,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};
