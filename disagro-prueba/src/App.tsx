import { useState } from 'react'
import {Header} from "./components/layout/Header.tsx"
import {Footer} from "./components/layout/Footer.tsx"
import {Ingreso} from "./components/layout/Ingreso.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Ingreso/>
      <Footer/>
    </>
  )
}

export default App
