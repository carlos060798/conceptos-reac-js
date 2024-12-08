
import './App.css'
import useRamdonNumber from './hook/useRandom'
function AppTanstack() {


  const {isLoading,number,refetch}=useRamdonNumber()


  return (

    <>

    <div className="App">
      <header className="App-header">
        <h1>Curso de Tankstand</h1>
        {isLoading && <p>Cargando...</p>}
        <h2>Contador: {number}</h2>
        <button onClick={() => refetch()}>Nuevo numero</button>
      </header>
    
    </div>
         
    </>
  )
}

export default AppTanstack
