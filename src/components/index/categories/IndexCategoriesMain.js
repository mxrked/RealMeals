import { Fragment } from "react";
import IndexCategoriesL from "./sides/IndexCategoriesL";
import IndexCategoriesR from "./sides/IndexCategoriesR";
import IndexCategoriesHP from "../../../assets/scripts/single-page/index/IndexCategoriesHP";

const IndexCategoriesMain = () => {
  return (
    <div id="indexCategories">
      <div className="container-fluid index-categories-box">
        <div className="row index-categories-row">
          <IndexCategoriesL />
          <IndexCategoriesR />
        </div>
      </div>
      <Fragment>
        <IndexCategoriesHP />
      </Fragment>
    </div>
  );
};

export default IndexCategoriesMain;
