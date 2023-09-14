import { useState } from 'react'
import PersonForm from './components/PersonForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonForm></PersonForm>
    </>
  )
}

export default App
