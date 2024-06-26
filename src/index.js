import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth'

import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          theme='dark'
          position='top-right'
          autoClose={5000}
          closeOnClick
          pauseOnHover={false}
        />

        <App />
      </Provider>
    </BrowserRouter>
  
)
