import { useState } from 'react'
import './App.css'
//  import SimpleForm from './components/SimpleForm/SimpleForm.jsx'
 import StatefulForm from './components/StatefulForm/StatefulForm.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
    {/* <SimpleForm></SimpleForm>   */}
   <StatefulForm></StatefulForm>
    </>
  )
}

export default App
