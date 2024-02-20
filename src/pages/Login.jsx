import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
import React, { useContext } from "react";
import axios from "axios";

const Login = () => {
  const [orgName,setOrgName]=useState("")
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [cin,setCin]=useState("")
  const [term,setTerm]=useState("")
  const [userData,setUserData]=useState("")
  const [showLogin,setShowLogin]=useState(true)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {isLoggedIn,setIsLoggedIn,storeData,checkIfWalletIsConnected,messages,setMessages,currentAccount,ConnectWallet} = useContext(ChatContext)

  const handleSignUp = () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please re-enter.");
      return;
    }

    // Your logic for handling the sign-up process
    // ...

    // Reset error message after successful submission
    setErrorMessage("");
  };

  const handleSendCompanyName_Data = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please re-enter.");
      return;
    }
    const jsonData = {
      Company_id: cin,
      Terms_and_condition:term,
      CIN:cin,
      mail:email,
      password:password
  
    };
  
    axios.post('https://cc-zz9j.onrender.com/insertdata', jsonData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        // Handle the response if needed
        console.log('Server response:', response);
        if(response.data==1){
          setMessages(cin)
          setIsLoggedIn(1)
          navigate('/chat')
        }
        
      })
      .catch(error => {
        console.error('Error sending text data:', error);
      });
  };
  const onPressButton = () => {

    // Navigate to the 'Details' screen and pass some data
    // navigate('/login2', {state:{
    //   org:orgName,
    //   email:email,
    //   cin:cin,
    //   term:term
    // }});
    // navigate(`/login2/?org=${orgName}&email=${email}&cin=${cin}&${term}`);
  };
  
  

 
  return (
    <>
    {showLogin? <div className="relative bg-[#090b1e] w-full pt-[128px] pb-[251px]">
      <div className="flex flex-col relative items-center justify-center max-w-[740px] mx-auto">
        <div className="max-w-[26.25rem] mb-[97px] bg-transparent relative text-[1.38rem] font-medium font-inter text-white whitespace-pre-wrap text-center inline-block">
          Insert data related to your Organization
        </div>

        <div className="relative w-full px-[44px] pt-[38px] pb-[29px] flex flex-col justify-around items-start rounded-md bg-white box-border h-[32.56rem] overflow-hidden text-center text-[0.88rem] font-inter border-[1px] border-solid border-darkgray">
          <label className="relative h-fit text-[0.88rem] font-medium font-inter text-[#090b1e] text-center inline-block" htmlFor=""> Enter Name Of Your Organization</label>
          <input
          onChange={(e)=>{
            setOrgName(e.target.value)
          }}
            type="text"
            placeholder="Your Organization Name"
            className="w-full relative rounded-md bg-whitesmoke box-border h-[2.75rem] overflow-hidden text-left p-3 text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-200"
          ></input>
          <label className="h-max" htmlFor=""> Enter Name Of Your Organization's Official Email Id</label>
          <input
            type="text"
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            placeholder="Your Organization Email Id"
            className="w-full relative rounded-md bg-whitesmoke box-border h-[2.75rem] overflow-hidden text-left p-3 text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-200"
          ></input>
          <label htmlFor=""> Enter the company's Corporate Identification Number (CIN)</label>
          <input
            type="text"
            
            placeholder="CIN"
            onChange={(e)=>{
              setCin(e.target.value)
            }}
              className="w-[137px] text-left p-3 relative rounded-md bg-whitesmoke box-border h-[2.75rem] overflow-hidden  p-3text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-200 "
          ></input>
          <label htmlFor=""> Enter the Terms and Conditions Of the Organization</label>
          <textarea
            type="text"
            onChange={(e)=>{
              setTerm(e.target.value)
            }}
            placeholder="Terms and Conditions "
            className="w-[651px] h-[106px] relative rounded-md bg-whitesmoke box-border  overflow-hidden text-left p-3 text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-200"
          ></textarea>
          <div onClick={()=>setShowLogin(false)} className="w-[118px] flex items-center justify-center mx-auto relative rounded-md [background:linear-gradient(-77.96deg,_#0057ff,_rgba(0,_111,_255,_0.72))] box-border h-[2.75rem] overflow-hidden text-center text-[0.88rem] text-white font-inter border-[1px] border-solid border-gray">
<div className="font-medium">Next</div>
</div>
        </div>
      </div>
    </div>
:

<div className="relative bg-[#090b1e] w-full pt-[112px] pb-[285px]">
{errorMessage && (
  <div className="w-full text-[0.75rem] font-medium font-inter text-red-500 text-center mt-2">
    {errorMessage}
  </div>
)}
<div className="flex flex-col relative items-center justify-center max-w-[400px] mx-auto">
  <div className="max-w-[26.25rem] mb-[97px] bg-transparent relative text-[1.38rem] font-medium font-inter text-white whitespace-pre-wrap text-center inline-block">
    Sign up/Login
{/* <div className="relative py-1  bg-purple-400 h-[50px] flex items-center justify-center mt-5 rounded-lg">

    {(currentAccount==="")?<button className="connectWallet h-fit" onClick={()=>{
 ConnectWallet()   
   checkIfWalletIsConnected()
    }}> Connect Wallet to  <span><img className="w-[128px] h-auto inline" src="https://cdn.discordapp.com/attachments/1198196635780522055/1203422832692957254/image.png?ex=65d109d9&is=65be94d9&hm=4663e35fb6b3972c54ba6afe54f2d88db4124ca7499b10982ff57e8a6b16d78c&" alt="" /></span> </button>:<div className="text-[0.6rem]">Connected</div>}
</div> */}
  </div>

  <div className="relative w-full px-[44px] pt-[38px] pb-[29px] flex flex-col justify-around items-start rounded-md bg-white box-border h-[32.56rem] overflow-hidden text-center text-[0.88rem] font-inter border-[1px] border-solid border-darkgray">
    <label
      className="relative h-fit text-[0.88rem] font-medium font-inter text-[#090b1e] text-center inline-block"
      htmlFor=""
    >
      {" "}
      Username
    </label>
    <input
      type="text"
      placeholder="Username"
      value={cin}
  onChange={(e) => setCin(e.target.value)}
      className="w-full relative rounded-md bg-whitesmoke box-border h-[2.75rem] overflow-hidden text-left p-3 text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-200"
    ></input>
    <label
      className="relative h-fit text-[0.88rem] font-medium font-inter text-[#090b1e] text-center inline-block"
      htmlFor=""
    >
    User's Data
    </label>
    <input
      type="text"
      placeholder="{JSON ...}"
      value={userData}
  onChange={(e) => setUserData(e.target.value)}
      className="w-full relative rounded-md bg-whitesmoke box-border h-[2.75rem] overflow-hidden text-left p-3 text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-200"
    ></input>
    <div className="w-[16.88rem] relative text-[0.75rem] font-medium font-inter text-[#ff0000] text-center inline-block">
      note : your organization’s CIN is your username
    </div>
    <label className="h-max" htmlFor="">
      {" "}
      Set Password
    </label>
    <input
      type="text"
      placeholder="Password"
      value={password}
  onChange={(e) => setPassword(e.target.value)}
      className="w-full relative rounded-md bg-whitesmoke box-border h-[2.75rem] overflow-hidden text-left p-3 text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-200"
    ></input>
    <label htmlFor=""> Re-enter Password </label>
    <input
      type="text"
      placeholder="Re-enter Password"
      value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
      className="w-full text-left p-3 relative rounded-md bg-whitesmoke box-border h-[2.75rem] overflow-hidden  p-3text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-200 "
    ></input>

    <div onClick={async ()=>{
      // storeData(cin,term,userData)
      handleSendCompanyName_Data()
      setIsLoggedIn(1)
      setMessages(cin)
      navigate('/chat')
     
    }} className="w-[118px] hover:scale-105 transition-all duration-200 flex justify-center items-center mx-auto relative rounded-md [background:linear-gradient(-77.96deg,_#0057ff,_rgba(0,_111,_255,_0.72))] box-border h-[2.75rem] overflow-hidden text-center text-[0.88rem] text-white font-inter border-[1px] border-solid border-gray">
      <div  className=" font-medium">Signs Up</div>
    </div>
    <div  className="w-[10.44rem] mx-auto relative text-[0.75rem] font-medium font-inter text-gray text-center inline-block">
      {`Already have Account? `}
      <span  className="[text-decoration:underline]">Login</span>
    </div>
  </div>
</div>
</div>}
    
    </>

  );
};

export default Login;
