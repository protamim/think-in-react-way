'use client';
import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductsTable = () => {
  const [isStocked, setIsStocked] = useState(false);
  const [filterText, setFilterText] = useState('');


  return (
    <div className="max-w-screen-md mx-auto mt-24 px-5">
      {/* search bar */}
      <SearchBar setIsStocked={setIsStocked} isStocked={isStocked} setFilterText={setFilterText} />
      {/* product table */}
     <ProductTable isStocked={isStocked} products={PRODUCTS} filterText={filterText} />
    </div>
  );
};

export default FilterableProductsTable;

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
