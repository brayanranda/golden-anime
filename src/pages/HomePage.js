import React from "react";
import Products from "../components/products";
import New from "../components/new";

const HomePage = () => {
  return (
    <main className="w-full py-12 bg-black">
      <Products />
      <New />
    </main>
  );
};

export default HomePage;
