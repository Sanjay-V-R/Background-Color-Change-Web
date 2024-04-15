
import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("white")
  const click = color => {
    setColor(color)
  }
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])
  return (
    <>
      <div className='box'>
        <div className='title'>
          <h1 style={{ color: "" }}>Background Color Change</h1>
        </div>
        <div className='btn'>
          <button onClick={() => click("red")} style={{ backgroundColor: 'red' }}>Red</button>
          <button onClick={() => click("green")} style={{ backgroundColor: 'green' }}>green</button>
          <button onClick={() => click("blue")} style={{ backgroundColor: 'blue' }}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
