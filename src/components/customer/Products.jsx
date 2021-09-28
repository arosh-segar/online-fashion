import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const Products = (props) => {
  const [products, setproducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    setproducts(props.products);
  }, []);
  return (
    <section class="bg-blue-300 min-h-screen flex justify-end">
      <div class="px-5 sm:px-10 lg:px-20 py-10 lg:py-24 mx-auto">
        {/* PRODUCT RETRIEVE */}
        <div className="flex justify-end ">
          <div className="flex justify-end">
            <label className="mr-5 my-auto italic">
              Filter Product Type :{" "}
            </label>
            <select
              className="p-2 w-2/4 rounded-lg"
              style={{
                textAlignLast: "center",
                textAlign: "center",
                fontStyle: "italic",
                backgroundColor: "white",
                width: "250px",
              }}
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all" selected>
                All
              </option>
              <option value="tShirts">T-shirts</option>
              <option value="trousers">Trousers</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </div>
        {/* END OF RETRIEVE PRODUCT */}
        <br />
        <br />
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 gap-y-10 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-4 lg:gap-x-5 lg:gap-y-10">
          {filterCategory === "all" ? (
            <>
              {products.map((stock) => (
                <ProductItem stock={stock} />
              ))}
            </>
          ) : (
            <>
              {products.map((stock) => (
                <>
                  {stock.productType === filterCategory && (
                    <ProductItem stock={stock} />
                  )}
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
