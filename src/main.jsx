import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'
import { Provider } from 'react-redux'
import {store} from './redux/store'
import {theme} from '../src/components/Theme'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}> 
      <Provider store={store}>  
    <App   />
    </Provider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
