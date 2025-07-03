import "./App.css"

// toast
import { ToastContainer, Bounce } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'

import Features from './components/pages/Features.jsx'

import Layout from './Layout.jsx'

function App() {



  return (
    <div className='bg-white !p-0'>
      <div id="body-wrapper" className="fixed z-[105] bg-[rgba(0,0,0,0.5)]"></div>
      <ToastContainer limit={3} position="top-right" autoClose={2500} transition={Bounce} hideProgressBar={true} />


      <BrowserRouter>

        <Layout />

      </BrowserRouter>

    </div>
  )
}

export default App
