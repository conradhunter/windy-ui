import React from "react";
import '../App.css';
import Pricing from "../components/Pricing";

function Home() {
  return (
    <div>
      <div id="slant" className="w-full flex items-center justify-center flex-col h-[calc(100vh-5rem)]">
        <h1 className="text-5xl font-bold">Task Assigner</h1>
        <p className="py-6 w-1/3 text-center">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="w-44 inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-indigo-500 hover:bg-indigo-700 rounded transition duration-200">
          Learn More
        </button>
        <h1>Insert slanted background HERE</h1>
      </div>
      <div className="h-screen bg-slate-400">
        {/* Customer reviews */}

        {/* Pricing */}
        <Pricing />
      </div>
    </div>
  );
}

export default Home;
