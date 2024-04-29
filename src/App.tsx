import { useState } from 'react'
import './App.css'
//  import SimpleForm from './components/SimpleForm/SimpleForm.jsx'
//  import StatefulForm from './components/StatefulForm/StatefulForm.jsx'
// import RefForm from './components/RefForm/RefForm.jsx'
//  import HookForm from './components/HookForm/HookForm.jsx'
// import ReusableForm from './components/ReusableForm/ReusableForm.jsx'
import Grandpa from './components/Grandpa/Grandpa.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
    {/* <SimpleForm></SimpleForm>   */}
   {/* <StatefulForm></StatefulForm> */}
   {/* <RefForm></RefForm> */}
   {/* <HookForm></HookForm> */}
   {/* <ReusableForm formTitle={'Sign Up'}></ReusableForm> */}
   {/* <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' ></ReusableForm> */}

   <Grandpa></Grandpa>
    </>
  )
}

export default App
