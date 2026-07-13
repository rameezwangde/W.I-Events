import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './styles/global.css'
import './styles/extra.css'
import './styles/responsive.css'
import './styles/experience.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><HelmetProvider><BrowserRouter><App /></BrowserRouter></HelmetProvider></React.StrictMode>
)


