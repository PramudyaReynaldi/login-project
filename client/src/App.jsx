import Login from './pages/Login'
import Register from './pages/Register'
import Quote from './pages/Quote'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/quote' element={<Quote />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
