
import './App.css'
import AppTanstack from './App-tankstand';
import ButtonType from './component/button';
import Form from './hook/useCallbackEjemplo';
import Gallery from './hook/useState';

function App() {


  async function handleIncrement(): Promise<void> {
    const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
    const data = await response.text();
    console.log(data);
  }

    return (
      <>
        <div className="App">
          <h1>Random Number Generator</h1>  
          <AppTanstack />
          <div>
            <ButtonType title="Generate Random Number" onClick={handleIncrement} />
          </div>

          <div>
            <h3>Ejemplo de use useCallback</h3>
            <Form />
          </div>
          <div>
            <Gallery />
          </div>
        </div>
      </>
    )
  }



export default App
