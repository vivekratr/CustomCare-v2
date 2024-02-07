import React,{useState,useEffect} from "react";
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login2 = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const {isLoggedIn,setIsLoggedIn,messages,setMessages} = useContext(ChatContext)
 const navigate=useNavigate()

  const checkLogin = () => {
    const jsonData = {
      'mail': 'ecomm@gmail.com',
      'password':"shreyash@12"
    };
  
    axios.post('https://customcare-v7j1.onrender.com/checkuser', jsonData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        // Handle the response if needed
        console.log('Server response:', response);
        if (response.data==1) {
          setIsLoggedIn(1)
          setMessages(username)
          navigate('/chat')
          
        }
   
      })
      .catch(error => {
        console.error('Error sending text data:', error);
      });
  };
  
  return (
    <div className="relative bg-[#090b1e] w-full pt-[112px] pb-[285px]">
      <div className="flex flex-col relative items-center justify-center max-w-[400px] mx-auto">
        <div className="max-w-[26.25rem] mb-[97px] bg-transparent relative text-[1.38rem] font-medium font-inter text-white whitespace-pre-wrap text-center inline-block">
          Sign up/Login
        </div>

        <div className="relative w-full px-[44px] pt-[38px] pb-[29px] flex flex-col justify-around items-start rounded-md bg-white box-border h-[32.56rem] overflow-hidden text-center text-[0.88rem] font-inter border-[1px] border-solid border-darkgray">
          <label className="relative h-fit text-[0.88rem] font-medium font-inter text-[#090b1e] text-center inline-block" htmlFor=""> Username</label>
          <input
            type="text"
            placeholder="Username"
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            className="w-full relative rounded-md bg-whitesmoke box-border h-[2.75rem] overflow-hidden text-left p-3 text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-200"
          ></input>
          <div className="w-[16.88rem] relative text-[0.75rem] font-medium font-inter text-[#ff0000] text-center inline-block">note : your organization’s CIN is your username</div>
          <label className="h-max" htmlFor=""> Enter Your Password</label>
          <input
            type="text"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            placeholder="Password"
            className="w-full relative rounded-md bg-whitesmoke box-border h-[2.75rem] overflow-hidden text-left p-3 text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-200"
          ></input>

          <div className="w-full text-right">
            Forget Password

          </div>
        
        
          <div onClick={checkLogin} className="w-[118px] hover:scale-105 cursor-pointer flex justify-center items-center mx-auto relative rounded-md [background:linear-gradient(-77.96deg,_#0057ff,_rgba(0,_111,_255,_0.72))] box-border h-[2.75rem] overflow-hidden text-center text-[0.88rem] text-white font-inter border-[1px] border-solid border-gray">
        <div className=" font-medium">Sign Up</div>
</div>
<div className="w-[10.44rem] mx-auto cursor-pointer relative text-[0.75rem] font-medium font-inter text-gray text-center inline-block">{`Already have Account? `}
<span className="[text-decoration:underline]">Login</span>
</div>
        </div>
      </div>
    </div>
  );
};

export default Login2;
