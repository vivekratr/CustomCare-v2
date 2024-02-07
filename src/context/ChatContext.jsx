import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";



export const ChatContext = React.createContext();



export const ChatProvider = ({ children }) => { 
  const getEthereumContract = async () => {
    console.log(contractABI, contractAddress);
    const { ethereum } = window;
  
    if (!ethereum || !ethereum.isConnected()) {
      console.error("Metamask not connected or not available.");
      return null;
    }
  
    console.log("ethereum", ethereum);
  
    const provider = new ethers.providers.Web3Provider(ethereum);
    console.log("provider", provider);
    const signer = provider.getSigner();
    console.log("signer", signer);
    
    try {
      const socoinContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
  
      console.log("Contract", socoinContract);
      return socoinContract;
    } catch (error) {
      console.error("Error creating contract instance:", error);
      return null;
    }
  };
  
  const [currentAccount, setCurrentAccount] = useState("");
    const  [messages, setMessages] = useState('0'); 
    const  [isLoggedIn, setIsLoggedIn] = useState('0'); 
const { ethereum } = window;
const checkIfWalletIsConnected = async () => {
  try {
    if (!ethereum) return alert("Please install metamask");

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      setCurrentAccount("");
      console.log("No account found");
    }
    console.log("Connected account: ", currentAccount);
  } catch (error) {
    console.log(error);
  }
};

const ConnectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install metamask");
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    setCurrentAccount(accounts[0])
    // .then(
    //   console.log(
    //     "Connected account: connected in connectWallet ",
    //     currentAccount
    //   )
    // );

    // const contracts = getEthereumContract();
    // console.log("Current account under connect wallet",currentAccount);
    // const userData = await contracts.user_data(currentAccount);
    // console.log("userData",userData);
  } catch (error) {
    console.log(error);
  }
};

  const storeData = async (num,_terms,_data) => {
      try {
        if (!ethereum) return alert("Please install metamask");
        const contracts =await getEthereumContract();
        console.log('inside store,',num,_data,_terms,contracts)
        const tx = await contracts.storeD(Number(num),_terms,_data);

        await tx.wait();
    
        console.log("tx", tx);
        
      } catch (error) {
        
        console.log(error);
        // throw new Error("Error in sending eth");
      }
    };

    const readData = async (_num) => {
      try {
        if (!ethereum) return alert("Please install metamask");
        const contract = getEthereumContract();
        const numRequests = await contract.read();
        // console.log("numRequestsNumber from its function", numRequestsNumber);
        // console.log("numRequests from its function", numRequestsNumber);
        return numRequests;
      } catch (error) {
        console.log(error);
      }
    };

    return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        isLoggedIn,
        setIsLoggedIn,
        readData,
        storeData,
        currentAccount,
        ConnectWallet,
        checkIfWalletIsConnected,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};