import { useEffect, useState } from "react";
import "./App.css";
import SearchNav from "./components/SearchNav";
import VerticalNav from "./components/VerticalNav";

function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);


  return (
    <div className="App">
      {/* Navbar displayed on left side of page */}
      <div className="flex">
        <VerticalNav />
        <div className="w-full bg-gray-800 h-20 lg:border-b border-gray-700 flex items-center">
          <SearchNav value={value} setValue={setValue} />
        </div>
      </div>
      {/* secondary nav bar with search input + task board filter + sign in/out buttons */}

      {/* dashboard style layouts with different editing, adding, deleting, sorting logic */}
    </div>
  );
}

export default App;
