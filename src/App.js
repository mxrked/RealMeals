import React from "react";

//* React Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

//* Scroll Restoration
import ScrollRestoration from "react-scroll-restoration";

//! Imports
import "./imports/styling_imports";
import "./imports/bootstrap_imports";
import "./imports/react-slick_imports";
import "./imports/lazysizes_imports";

//! Views
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ProductsView from "./views/ProductsView";
import ContactView from "./views/ContactView";
import CartView from "./views/CartView";
import SearchView from "./views/SearchView";

//! Assets
import PageChangeOverflowFix from "./assets/scripts/cross-page/overflow/PageChangeOverflowFix";
import EveryPage from "./helpers/EveryPage";
import RedirectFooterLinks from "./assets/scripts/cross-page/footer/RedirectFooterLinks";
import CheckingSSForItems from "./assets/scripts/cross-page/products/CheckingSSForItems";
import ProductsScrollIntoView from "./assets/scripts/cross-page/scroll/ProductsScrollIntoView";
import PageFading from "./assets/scripts/cross-page/overlay/PageFading";
import CartAddedAlert from "./assets/scripts/cross-page/products/CartAddedAlert";

const Routing = () => {
  return (
    <BrowserRouter basename="/react-projects/realmeals">
      <ScrollRestoration />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/home" component={HomeView} />
        <Route path="/about" component={AboutView} />
        <Route path="/products" component={ProductsView} />
        <Route path="/contact" component={ContactView} />
        <Route path="/cart" component={CartView} />
        <Route path="/search" component={SearchView} />
      </Switch>

      {/* All of the stuff below are used when changing routes */}
      <PageChangeOverflowFix />
      <ProductsScrollIntoView />
      <RedirectFooterLinks />
      <CheckingSSForItems />
      <PageFading />
      <CartAddedAlert />
    </BrowserRouter>
  );
};

function App() {
  return (
    <div className="App">
      <Routing />
      <EveryPage />
    </div>
  );
}

export default App;
