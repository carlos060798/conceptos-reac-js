import "./App.css";
import Image from "./componetes bases/image";
import RenderList from "./componetes bases/render";
import EventosButton from "./componetes bases/eventos";
import Board from "./componetes bases/tutorial tres lineas/board";
import FilterableProductTable from "./componetes bases/filtrado de datos/table";
import products from "./data";

const data = [
  {
    name: "manzana",
    price: 1,
    agotado: true,
  },
  {
    name: "pera",
    price: 2,
    agotado: false,
  },
];

function App() {
  return (
    <div className="container">
      <h2>ejemplo</h2>
      <div className="container__concept">
        <div className="container__concept__img">
          <Image />
        </div>

        <div className="container__concept_renderlist">
          <RenderList data={data} />
        </div>
        <div className="container__concept__eventos">
          <EventosButton />
        </div>
        <div className="container__concept__tutorial-1">
          <Board />
        </div>

        <div className="container__concept__tutorial-2">
          <FilterableProductTable products={products}/>
        </div>
      </div>
    </div>
  );
}

export default App;
