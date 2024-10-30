import { useState } from 'react'
import { useCallback } from 'react'
import './App.css'
function App() {
  const [length, setLength] = useState(8)
  const [numcheck, setNumcheck] = useState(false)
  const [charcheck, setCharcheck] = useState(false)
  const [password, Setpassword] = useState("")

  const password_generator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqrstuvwxyz"
    if (numcheck) {
      str += '0123456789'
    }
    if (charcheckcheck) {
      str += '~!@#$%^&*`'
    }
    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)

    }

    Setpassword(pass)
  }, [length, numcheck, charcheck])

return (
  <>
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
    <h1 className=' absolute text-slate-500 mb-56 text-4xl ' >Password Generator</h1>
      <div className="w-1/2 h-40 bg-slate-400 flex items-center">
       <input type="Password" placeholder='Password' className='w-4/5 h-12 bg-gray-50 ml-3 mb-20 rounded-2xl text-black text-3xl outline-none pl-2' readOnly />
      
       
      </div>
    </div>
  </>
)
}

export default App
