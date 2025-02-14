import './App.css'
import Home from './pags/Home'
import Join from './pags/Join'
import Navlinks from './pags/Navlinks'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Navlinks />
      <Routes>
        <Route path='/Redux' element={<Home/>}/>
        <Route path='/Redux/join' element={<Join/>}/>
      </Routes>
    </>
  )
}

export default App
