import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './assets/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Apppractice from './assets/Practice/Apppractice.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Apppractice/>
  </StrictMode>,
)
