import { FilterableProductsTable } from "@/components/think-in-react-way";
import Link from "next/link";
import React from "react";

const ThinkInReactWay = () => {
  return (
    <div>
      {/* navigation */}
      <div className="my-6 mx-8">
        <Link href="/" className="transition-all ease-in-out duration-300 hover:text-purple-500">
          <button> {"<-"} Back to home</button>
        </Link>
      </div>
      {/* filterable product table */}
      <div>
        <FilterableProductsTable />
      </div>
    </div>
  );
};

export default ThinkInReactWay;
