import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import DetailedPhoto from "./Pages/DetailedPhoto/DetailedPhoto";
import Favorites from "./Pages/Favorites/Favorites";
import Header from "./Components/Header/Header";
import SearchResults from "./Pages/SearchResults/SearchResults";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/photo/:id", name: "Photo", Component: DetailedPhoto },
  { path: "/favorites", name: "Favorites", Component: Favorites },
  { path: "/searchResults", name: "SearchResults", Component: SearchResults },
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
