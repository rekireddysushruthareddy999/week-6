import { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";

function Home() {
  const { counter, changeCounter } = useContext(counterContextObj);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 text-center transition duration-300 hover:shadow-purple-300">
        
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
          Welcome Home
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Employee Management System
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-10 shadow-md">
          
          <p className="text-2xl text-gray-600 mb-4">
            Counter
          </p>

          <h1 className="text-7xl font-extrabold text-purple-600 mb-8 transition duration-300">
            {counter}
          </h1>

          <button
            onClick={changeCounter}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Change Counter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;