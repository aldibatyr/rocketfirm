import React, { useContext } from "react";
import "./Home.scss";
import { Context } from "../../StateManagement/AppState";

const Home = () => {
  const context = useContext(Context);

  console.log(context.searchQueries);

  const handleAddQuery = () => {
    context.setSearchQueries([...context.searchQueries, "new value"]);
  };
  return (
    <div style={{ minHeight: "120vh", paddingTop: '500px' }}>
      <button onClick={handleAddQuery}>Push me</button>
    </div>
  );
};

export default Home;
