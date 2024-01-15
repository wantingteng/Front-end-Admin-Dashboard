import React from 'react'
import ReactDOM from 'react-dom/client'
//initialize first
import "reset-css"
//UI framework

//global style
import "@/assets/styles/global.scss"
// component style
import App from './App'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
