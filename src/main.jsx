import React from 'react'
import { render } from 'react-dom';
import App from './App.jsx'
import './index.css'
import {ChatProvider} from './context/ChatContext'
import 'regenerator-runtime/runtime';



     
        
         render(<ChatProvider><App /> </ChatProvider>, document.getElementById('root'));
