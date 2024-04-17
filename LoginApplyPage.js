import React ,{ useState, useEffect } from "react";
import Login from './Login';
import Apply from "./Apply";
import './loginApply.css'


const LoginApplyPage = () => {
    const [activeButton, setActiveButton] = useState('login'); 

    const setLogin = () => {
      setActiveButton('login');
    };
  
    const setApply = () => {
      setActiveButton('apply');
    };
  return (
    
    <div className="loginApply">
      <div className="loginApplyL">
      <div className="backgroundImageContainer">
                    <img src= "https://imageio.forbes.com/specials-images/imageserve/61b6d5fd475a71fdc7dda795/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="Background" className="backgroundImage" />
                    
        </div>

    </div>
<div className="loginApplyR">    
{activeButton === 'login' ? <Login setApply={setApply}  /> : <Apply setLogin={setLogin} />}
</div>
    </div>
   
  );
};

export default LoginApplyPage;