import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import client from './utils/ApolloClient.js'
import {ApolloProvider} from '@apollo/react-hooks'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <ApolloProvider client={client}>
    <BrowserRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>
  </AuthProvider>
)
