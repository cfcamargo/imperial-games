import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/css/global.css'
import { BrowserRouter } from 'react-router-dom'
import IntlProviderConfigured from './_i18n/IntlProviderConfigured'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <IntlProviderConfigured>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </IntlProviderConfigured>
    
  </React.StrictMode>
)
