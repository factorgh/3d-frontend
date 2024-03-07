import { useState } from 'react'
import Canvas from "./canvas"
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Customizer from './pages/Customizer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='app transition-all ease-in'>
       <Home/>
       <Canvas/>
       <Customizer/>
      </main>
      
    </>
  )
}

export default App
