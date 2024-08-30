import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <ErrorBoundary>
       <Header/>
     <h1>Hello Vite</h1>
    </ErrorBoundary>
   
    
  )
}

export default App
