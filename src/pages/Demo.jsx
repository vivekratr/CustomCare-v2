import React from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Demo = () => {
  const [term,setTerm] = React.useState('')
  function handleChange(e){
    setTerm(e.target.value)
    console.log(term)
  }

  const navigate = useNavigate();

  const handleSendCompanyName_Data = () => {
    const jsonData = {
      Company_id: '1012',
      Terms_and_condition:term,
      CIN:3,
      mail:'we@demo.com',
      password:'demouser'
  
    };
  
    axios.post('https://customcare-v7j1.onrender.com/insertdata', jsonData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        // Handle the response if needed
        console.log('Server response:', response);
        
      })
      .catch(error => {
        console.error('Error sending text data:', error);
      });
  };
  return (
    <div className="relative bg-[#090b1e] w-full pt-[128px] pb-[251px]">
      <div className="flex flex-col relative items-center justify-center max-w-[740px] mx-auto">
        <div className="max-w-[26.25rem] mb-[97px] bg-transparent relative text-[1.38rem] font-medium font-inter text-white whitespace-pre-wrap text-center inline-block">
     Demo
        </div>

        <div className="relative w-full px-[44px] pt-[38px] pb-[29px] flex flex-col justify-evenly items-start rounded-md bg-white box-border h-[18.56rem] overflow-hidden text-center text-[0.88rem] font-inter border-[1px] border-solid border-darkgray">
        
          <label htmlFor=""> Enter the Terms and Conditions Of the Organization</label>
          <textarea
          onChange={handleChange}
            type="text"
            placeholder="Terms and Conditions "
            className="w-[651px] h-[106px] relative rounded-md bg-whitesmoke box-border  overflow-hidden text-left p-3 text-[0.88rem] text-black font-inter border-[1px] border-solid border-gray-200"
          ></textarea>
          <div 
          onClick={ ()=>{
            
            handleSendCompanyName_Data();

            navigate('/demochat');
          }}

          className="w-[118px] flex items-center justify-center hover:scale-105 transition-all duration-150 mx-auto relative rounded-md [background:linear-gradient(-77.96deg,_#0057ff,_rgba(0,_111,_255,_0.72))] box-border h-[2.75rem] overflow-hidden text-center text-[0.88rem] text-white font-inter border-[1px] border-solid border-gray">
<div className=" font-medium">Test</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
