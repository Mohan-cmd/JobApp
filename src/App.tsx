import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css'
import {MantineProvider,Slider} from '@mantine/core';
import HomePage from './Pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
    
     <HomePage></HomePage> 
    </MantineProvider>
  
  )
}

export default App
