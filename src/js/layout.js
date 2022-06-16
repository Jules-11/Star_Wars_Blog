import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/Home";
import Characters from "./views/Characters";
import Planets from "./views/Planets";
import Vehicles from "./views/Vehicles";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SearchBar } from "./component/searchBar";
// import { Card } from "./component/Card";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <SearchBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/characters/:id" component={Characters} />
            <Route exact path="/planets/:id" component={Planets} />
            <Route exact path="/vehicles/:id" component={Vehicles} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
