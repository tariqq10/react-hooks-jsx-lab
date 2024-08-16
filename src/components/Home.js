

import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // Update the JSX being returned!
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>{name} is a Web Developer from {city}</h1>
    </div>
  );
}

export default Home;

