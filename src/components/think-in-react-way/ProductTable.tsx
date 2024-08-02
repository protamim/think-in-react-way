import { ReactNode } from "react";
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

interface ProductTableProps {
  products: Array<{
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  }>;
  isStocked: boolean;
  filterText: string;
}

const ProductTable = ({
  products,
  isStocked,
  filterText,
}: ProductTableProps) => {
  let rows: ReactNode[] = [];
  let lastCategory: string = "";

  products.forEach((prod) => {
    if (prod.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1) {
      return;
    }

    if (isStocked && !prod.stocked) {
      return;
    }

    if (prod.category != lastCategory) {
      rows.push(
        <ProductCategory category={prod.category} key={prod.category} />
      );
    }
    rows.push(
      <ProductRow
        name={prod.name}
        price={prod.price}
        key={prod.name}
        stocked={prod.stocked}
      />
    );

    lastCategory = prod.category;
  });

  let notFound = (
    <tr>
      <td colSpan="2">
        <h4 className="text-lg font-medium text-gray-500 text-center px-5 py-8">
          Does not match any results! 🥺
        </h4>
      </td>
    </tr>
  );

  return (
    <>
      <table className="border border-slate-400 border-collapse w-full ">
        <thead>
          <tr>
            <th className="border border-slate-300 border-collapse py-3 text-bold text-xl">
              Name
            </th>
            <th className=" border border-slate-300 border-collapse text-bold text-xl">Price</th>
          </tr>
        </thead>
        <tbody>{rows.length > 0 ? rows : notFound}</tbody>
      </table>
    </>
  );
};

export default ProductTable;
