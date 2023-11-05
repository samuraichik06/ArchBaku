import React from 'react'
import EsasSehife from './Pages/EsasSehife'
import Haqqimizda from './Pages/Haqqimizda'
import Layiheler from './Pages/Layiheler'
import Xeberler from './Pages/Xeberler'
import Elaqe from './Pages/Elaqe'
import Xidmetler from './Pages/Xidmetler'
import Vakansiyalar from './Pages/Vakansiyalar'

import { Routes , Route } from 'react-router'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<EsasSehife />}/>
        <Route path='/Haqqimizda' element={<Haqqimizda />}/>
        <Route path='/Layiheler' element={<Layiheler />}/>
        <Route path='/Xeberler' element={<Xeberler />}/>
        <Route path='/Elaqe' element={<Elaqe />}/>
        <Route path='/Xidmetler' element={<Xidmetler />}/>
        <Route path='/Vakansiyalar' element={<Vakansiyalar />}/>
      </Routes>
    </>
  )
}

export default App