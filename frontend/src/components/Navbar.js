import React,{useContext} from 'react';
import{Link,useNavigate} from 'react-router-dom';
import{AuthContext}from '../context/AuthContext';
function Navbar(){
    const{token,logout}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleLogout=()=>{
        logout();
        navigate('/auth/login');
    };
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ categories">Categories</Link></li>{!token?(<>
                <li><Link to="/auth/login">Login</Link></li>
                <li><Link to="/auth/signup">Sign Up</Link></li></>
                ):(
                    <li><button onClick={handleLogout}>Logout</button></li>)}
            </ul>
        </nav>
    );
}
export default Navbar;