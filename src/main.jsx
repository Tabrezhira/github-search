import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './context/ThemeProvider.jsx'
import UserProvider from './context/UserProvider.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

document.body.className='light-mode' 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
               <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
