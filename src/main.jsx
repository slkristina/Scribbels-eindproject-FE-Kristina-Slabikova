import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
                <App/>
        </BrowserRouter>
    </StrictMode>
);
