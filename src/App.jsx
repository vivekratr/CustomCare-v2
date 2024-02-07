

import './App.css'
// eslint-disable-next-line no-unused-vars
import Record_audio from './pages/Record_audio'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VoiceSelector from './components/VoiceSelector'
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Demo from './pages/Demo';
import 'regenerator-runtime/runtime';
import Register from './pages/Register';
import Login2 from './pages/Login2';
import Chatroom from './pages/Chatroom';
import Wavesurfer from './pages/Wavesurfer';
import GettingStarted from './pages/GettingStarted';
import DemoChat from './components/DemoChat';
import React from 'react';
import {ChatProvider} from './context/ChatContext'
import Fire from './components/Fire';
function App() {
  const [compID,setCompID] = React.useState('0')

  return (
    <>
      {/* <Dictaphone/> */}
     
      
      <BrowserRouter>
      <div>
     <ChatProvider>
          <Routes>
          <Route path="/record" element={<Record_audio compId={compID}  /*state = {state}*/ />} />
          <Route path="/voice" element={<VoiceSelector compId={compID}  /*state = {state}*/ />} />
          <Route path="/main" element={<Mainpage compId={compID} /*state = {state}*/ />} />
          <Route path="/start" element={<Login set={setCompID} compId={compID}   /*state = {state}*/ />} />
          <Route path="/demo" element={<Demo /*state = {state}*/ compId={compID}  />} />
          <Route path="/register" element={<Register set={setCompID} compId={compID}   /*state = {state}*/ />} />
          <Route path="/login2" element={<Login2 set={setCompID} compId={compID}   /*state = {state}*/ />} />
          <Route path="/chat" element={<Chatroom compId={compID}  /*state = {state}*/ />} />
          <Route path="/wave" element={<Wavesurfer /*state = {state}*/ />} />
          <Route path="/" element={<GettingStarted compId={compID} /*state = {state}*/ />} />
          <Route path="/demochat" element={<DemoChat compId={compID}  /*state = {state}*/ />} />
          <Route path="/fire" element={<Fire compId={compID}  /*state = {state}*/ />} />
            
          </Routes>
         </ChatProvider>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
