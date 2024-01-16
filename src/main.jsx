import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider >
    <ColorModeSwitcher />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
)

