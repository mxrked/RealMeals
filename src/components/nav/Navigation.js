import { Fragment } from "react";

import NavigationMenu from "./menu/NavigationMenu";
import NavL from "./sides/NavL";
import NavR from "./sides/NavR";

import NavMenuToggle from "../../assets/scripts/cross-page/nav/NavMenuToggle";
import NavMenuClose from "../../assets/scripts/cross-page/nav/NavMenuClose";

const Navigation = () => {
  return (
    <nav id="navigation">
      <div className="container-fluid navigation-box">
        <div className="row navigation-row">
          <NavL />
          <NavR />
        </div>
      </div>
      <Fragment>
        <NavigationMenu />
        <NavMenuToggle />
        <NavMenuClose />
      </Fragment>
    </nav>
  );
};

export default Navigation;
