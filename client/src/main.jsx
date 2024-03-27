import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/user/UserContext.jsx'
import { ChakraProvider } from '@chakra-ui/react'

import { ThemeProvider } from './context/ThemeContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ThemeProvider>
    <ChakraProvider>
    <UserProvider>
      
    <App />
    
    
    </UserProvider>
    
    </ChakraProvider >
    </ThemeProvider>
  </React.StrictMode>,
)
