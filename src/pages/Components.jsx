import React from "react";
import ComponentsSideBar from "../components/ComponentsSideBar";
import { useLocation } from "react-router-dom";

function Components() {
  const location = useLocation();

  if (location.pathname === "/components") {
    // hide nav bar (top nav)
  }

  return (
    <div className="flex justify-evenly">
        <ComponentsSideBar />
    </div>
  );
}

export default Components;
