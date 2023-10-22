import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    PokedexProvider
} from "./contexts/PokedexContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PokedexProvider>
        <App />
    </PokedexProvider>
  </React.StrictMode>
)
