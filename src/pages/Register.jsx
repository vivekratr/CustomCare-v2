import  { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  
  return (
    <div className="relative bg-[#090b1e] w-full pt-[112px] pb-[285px]">
      {errorMessage && (
        <div className="w-full text-[0.75rem] font-medium font-inter text-red-500 text-center mt-2">
          {errorMessage}
        </div>
      )}
      <div className="flex flex-col relative items-center justify-center max-w-[400px] mx-auto">
        <div className="max-w-[26.25rem] mb-[97px] bg-transparent relative text-[1.38rem] font-medium font-inter text-white whitespace-pre-wrap text-center inline-block">
          Sign up/Login
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
            value={username}
        onChange={(e) => setUsername(e.target.value)}
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

          <div className="w-[118px] hover:scale-105 transition-all duration-200 flex justify-center items-center mx-auto relative rounded-md [background:linear-gradient(-77.96deg,_#0057ff,_rgba(0,_111,_255,_0.72))] box-border h-[2.75rem] overflow-hidden text-center text-[0.88rem] text-white font-inter border-[1px] border-solid border-gray">
            <div className=" font-medium">Sign Up</div>
          </div>
          <div className="w-[10.44rem] cursor-pointer mx-auto relative text-[0.75rem] font-medium font-inter text-gray text-center inline-block">
            {`Already have Account? `}
            <span className="[text-decoration:underline]">Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
