import React from "react";

interface ProductRowProps {
  name: string;
  price: string;
  stocked: boolean;
}

const ProductRow = ({ name, price, stocked }: ProductRowProps) => {
  return (
    <tr>
      <td
        className={`border border-slate-300 border-collapse p-1 ${
          !stocked && "text-red-500"
        }`}
      >
        {name}
      </td>
      <td className="border p-1 border-slate-300 border-collapse">{price}</td>
    </tr>
  );
};

export default ProductRow;
