/*import ProductTable from "./componentes/product.table";
import SearchBar from "./componentes/sidbar";
import { useState } from "react";
/*
function FilterableProductTable( {products} ) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

    return (
      <div>
  <SearchBar 
    filterText={filterText} 
    inStockOnly={inStockOnly} 
    onFilterTextChange={setFilterText}
    onInStockOnlyChange={setInStockOnly} />
    
  <ProductTable 
    products={products}
    filterText={filterText}
    inStockOnly={inStockOnly} />
</div>
    );
  }


export default FilterableProductTable;
*/
import  {useState} from 'react';
import ProductTable from './componentes/product.table';
import SearchBar from './componentes/sidbar';

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

