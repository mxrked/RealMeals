//! Index Page
import { useEffect } from "react";

//* Components
import Navigation from "../components/nav/Navigation";
import IndexTopMain from "../components/index/top/IndexTopMain";
import IndexCategoriesMain from "../components/index/categories/IndexCategoriesMain";
import IndexProductsMain from "../components/index/products/IndexProductsMain";
import IndexInfoMain from "../components/index/info/IndexInfoMain";
import IndexBenefitsMain from "../components/index/benefits/IndexBenefitsMain";
import IndexContactMain from "../components/index/contact/IndexContactMain";

//* Assets

const HomeView = () => {
  useEffect(() => {
    document.title = "RealMeals.com | Home Page";
  }, []);

  return (
    <div id="indexBody">
      <div id="indexTop">
        <Navigation />
        <IndexTopMain />
      </div>

      <IndexCategoriesMain />
      <IndexProductsMain />
      <IndexInfoMain />
      <IndexBenefitsMain />
      <IndexContactMain />
    </div>
  );
};

export default HomeView;
