import { useState } from 'react'

import './App.css'
import AppTanstack from './App-tankstand';

function App() {
  const [count, setCount] = useState(0)


  async function handleIncrement(): Promise<void> {
    const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
    const data = await response.text();
    
    setCount(Number(data));
  }

  return (

    <>

    <div className="App">
      <header className="App-header">
        <h1>Curso de Tankstand</h1>
        <h2>Contador: {count}</h2>
        <button onClick={handleIncrement}>Nuevo numero</button>
      </header>
      <AppTanstack />
    
    </div>
         
    </>
  )
}

export default App
