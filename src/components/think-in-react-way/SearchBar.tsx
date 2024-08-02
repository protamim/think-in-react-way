import React, { ChangeEvent } from "react";

interface SearchBarProps {
  setIsStocked: Function;
  isStocked: boolean;
  setFilterText: Function;
}

const SearchBar = ({
  setIsStocked,
  isStocked,
  setFilterText,
}: SearchBarProps) => {
  const onCheckStock = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setIsStocked(e.target.checked);
  };

  const onFilteringProduct = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFilterText(e.target.value);
  };

  return (
    <form className="flex items-start gap-5 mb-6 flex-col">
      <input
        onChange={onFilteringProduct}
        type="text"
        placeholder="search..."
        className="border border-gray-500 p-2"
      />
      <label htmlFor="stocked" className="flex items-center gap-2">
        <input
          onChange={onCheckStock}
          type="checkbox"
          checked={isStocked}
        />
        only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
