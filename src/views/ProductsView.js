//! Products Page
import { useEffect } from "react";

//* Components
import ProductsTopMain from "../components/products/top/ProductsTopMain";
import ProductsSectsMain from "../components/products/sects/ProductsSectsMain";

//* Assets
import OtherPageNavs from "../helpers/OtherPageNavs";

const ProductsView = () => {
  useEffect(() => {
    document.title = "RealMeals.com | Products Page";
  }, []);

  return (
    <div id="productsBody">
      <OtherPageNavs />

      <ProductsTopMain />
      <ProductsSectsMain />
    </div>
  );
};

export default ProductsView;
