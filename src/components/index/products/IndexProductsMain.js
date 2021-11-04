import IndexProductsItems from "./sects/IndexProductsItems";
import IndexProductsTop from "./sects/IndexProductsTop";

const IndexProductsMain = () => {
  return (
    <div id="indexProducts">
      <div className="index-products-box">
        <IndexProductsTop />
        <IndexProductsItems />
      </div>
    </div>
  );
};

export default IndexProductsMain;
