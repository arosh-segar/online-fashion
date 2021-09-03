import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import axios from "axios";
import ProductItem from "./ProductItem";

const Product = (props) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    // axios;
    // .get(`${API_URL}/inventory`)
    // .then((response) => {
    //   setproducts(response.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    setproducts(props.products);
    console.log("data: ", props.products);
  }, []);
  return (
    <section class="bg-yellow-300 h-screen">
      <div class="px-5 sm:px-10 lg:px-20 py-10 lg:py-24 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 gap-y-10 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-4 lg:gap-x-5 lg:gap-y-10">
          {products.map((stock) => (
            <ProductItem stock={stock} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
