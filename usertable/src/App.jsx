import { useState } from 'react'
import NavBar from './components/Navbar'
import './App.css'
import UserDetails from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <UserDetails/>
    </>
  )
}

export default App
