import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../StateManagement/AppState";
import { keys } from "../keys";

const Networking = ({ children }) => {

  const context = useContext(Context);

  const fetchData = async () => {
    const imagesData = await fetch(`${keys.API_URL}/photos/?client_id=${keys.ACCESS_KEY}`)
    imagesData.json().then(data => context.setPosts(data))
  }
  useEffect(() => {

  })

  return <>{children}</>;
};

export default Networking;
