import React from "react";
import { Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import DetailedPhotoPage from "./Pages/DetailedPhotoPage/DetailedPhotoPage";
import Favorites from "./Pages/Favorites/Favorites";
import SearchResults from "./Pages/SearchResults/SearchResults";
import Header from "./Components/Header/Header";

import "./App.scss";


const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/photo/:id", name: "Photo", Component: DetailedPhotoPage },
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
