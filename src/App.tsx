// import { useState } from 'react'

import './App.css'
import '@mantine/core/styles.css'
import {MantineProvider,createTheme} from '@mantine/core';
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)
  const theme = createTheme({
    colors:{
      'mineshaft':['#f6f6f6','#efefef','#dcdcdc','#bdbdbd','#989898','#7c7c7c', '#656565','#525252', '#464646','#3d3d3d','#292929',],
      'brightsun':['#fffbeb','#fef3c7','#fde68a','#fcd94d','#fbd024','#f5c60b','#d9af06','#b49209','#92780e','#78630f','#453803',]
},

  })
  return (
    <MantineProvider theme={theme}>
     <BrowserRouter>
      <Routes>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
     </BrowserRouter>
    </MantineProvider>
  
  )
}

export default App
