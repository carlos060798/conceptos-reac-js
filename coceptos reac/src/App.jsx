
import './App.css'
import Image from './componetes bases/image'
import RenderList from './componetes bases/render'
import EventosButton from './componetes bases/eventos'
import Board from './componetes bases/tutorial tres lineas/board'

const data = [
  {
    name: 'manzana',
    price: 1,
    agotado: true
  },
  {
    name: 'pera',
    price: 2,
    agotado: false
  }
]

function App() {

  return (
    <>
    <h2>ejemplo</h2> 
    <Image /> 
    <RenderList data={data} />
    <EventosButton /> 
    <Board />
    </>
  )
}

export default App
