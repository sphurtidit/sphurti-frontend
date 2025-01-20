import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Home } from './Home.jsx'

import 'react-toastify/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
