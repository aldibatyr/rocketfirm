import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import DetailedPhoto from "./Pages/DetailedPhoto/DetailedPhoto";
import Favorites from "./Pages/Favorites/Favorites";
import Header from "./Components/Header/Header";


const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/photo/:id", name: "Photo", Component: DetailedPhoto },
  { path: "/favorites", name: "Favorites", Component: Favorites },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </main>
    </div>
  );
}

export default App;
