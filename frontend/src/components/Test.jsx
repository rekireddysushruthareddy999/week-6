import React, { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";

function Test() {
  const { counter1, changeCounter1 } = useContext(counterContextObj);

  console.log("Test");

  return (
    <div className="w-full max-w-xl mx-auto mt-6">
      
      {/* Card */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 text-center hover:scale-[1.02] transition-all duration-300">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Secondary Counter
        </h2>

        <p className="text-gray-300 mt-2">
          Interactive Counter Component
        </p>

        {/* Counter */}
        <div className="mt-8">
          
          <h1 className="text-8xl font-black text-white animate-pulse">
            {counter1}
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Button */}
        <button
          onClick={changeCounter1}
          className="mt-8 px-10 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-xl font-bold shadow-lg hover:scale-110 hover:shadow-pink-500/40 transition-all duration-300 active:scale-95"
        >
          Change Counter
        </button>

        {/* Decorative Glow */}
        <div className="absolute inset-0 rounded-3xl border border-cyan-400/10 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default Test;