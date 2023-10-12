import './App.css'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Cabeza from './layout/cabeza'
import Login from './routes/Login'
import Signup from './routes/Signup'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cabeza />}>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
