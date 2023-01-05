import React from "react";
import { Link } from "react-router-dom";

function ComponentsSideBar() {
  const components = [
    "Alert",
    "Card",
    "Checkbox",
    "File Input",
    "Range",
    "Rating",
    "Select",
    "FAQ",
    "Dropdown",
    "Accordion",
    "Text Input",
    "Input Groups",
    "Text Area",
    "Toggle",
    "Navigation",
    "Footer",
    "Hero",
    "Breadcrumbs",
    "Pagination",
    "Avatar",
    "Forms",
    "Sign-in/Sign-up",
    "Contact form",
    "Modal",
    "Skeleton",
    "Button",
    "Code",
    "Steps",
  ];

  const pageComponents = [
    "Landing Page",
    "Home Screen",
    "Settings Screen",
    "Dashboard",
    "E-commerce Screens",
  ];

  function removeSpaces() {
    components.map((component) => {
      let replacedComponents = component
        .split(" ")
        .join("")
        .toLocaleLowerCase()
        .replace('/', '-')
    });
    pageComponents.map((component) => {
      let replacedPageComponents = component
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      console.log(replacedPageComponents);
    });
  }

  return (
    <aside
      id="sidebar"
      className="w-2/12 bg-gray-800 border-t-2 border-t-gray-700 overflow-y-auto h-[calc(100vh-5rem)] px-8 pt-5 fixed bottom-0 left-0"
    >
      <div
        id="list__group"
        className="text-gray-300 mb-5 pb-5 border-b-2 border-b-gray-700"
      >
        <h6 className="mb-3 font-semibold">Components</h6>
        <ul className="text-sm leading-loose">
          {components.sort().map((component, index) => {
            return (
              <Link key={index} to={`/components/${component}`}>
                <li className="hover:bg-gray-700 rounded py-1 pr-1 duration-200 pl-3 mb-2">
                  {component}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div
        id="list__group"
        className="text-gray-300 mb-5 pb-5 border-b-2 border-b-gray-700"
      >
        <h6 className="mb-3 font-semibold">Page Examples</h6>
        <ul className="text-sm leading-loose">
          {pageComponents.sort().map((pageComponent, index) => {
            return (
              <Link key={index} to={`/components/${pageComponent}`}>
                <li className="hover:bg-gray-700 rounded py-1 pr-1 duration-200 pl-3 mb-2">
                  {pageComponent}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default ComponentsSideBar;
