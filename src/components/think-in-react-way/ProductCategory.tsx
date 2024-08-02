import React from "react";

const ProductCategory = ({ category }: { category: string }) => {
  return (
    <tr>
      <th colSpan="2" className="py-2">{category}</th>
    </tr>
  );
};

export default ProductCategory;
