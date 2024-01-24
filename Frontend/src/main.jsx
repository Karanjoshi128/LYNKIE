import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PopupProvider } from './contexts/popupcontext'


ReactDOM.createRoot(document.getElementById('root')).render(
    <PopupProvider>
      <App />
    </PopupProvider>
)
