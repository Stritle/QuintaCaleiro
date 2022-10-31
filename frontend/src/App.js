import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Historia from "./pages/Historia";
import Blog from "./pages/Blog";
import VinhosPage from "./pages/VinhosPage";
import Cart from "./pages/Cart";
import DetailsVinho from "./pages/DetailsVinho";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Noticias from "./pages/Noticias";
import Quinta from "./pages/Quinta";
import ManageVinhos from "./pages/ManageVinhos";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/historia" component={Historia} />
        <Route exact path="/vinho" component={VinhosPage} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/quinta" component={Quinta} />
        <Route exact path="/noticias" component={Noticias} />
        <Route path="/details/:id" component={DetailsVinho} />
        <Route path="/cart/:id?" component={Cart} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/managevinhos" component={ManageVinhos} />

        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
