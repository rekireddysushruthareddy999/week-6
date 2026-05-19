import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { counterContextObj } from "../contexts/ContextProvider";
import axios from "axios";

function ListOfEmps() {
  const { counter, changeCounter } = useContext(counterContextObj);

  const [emps, setEmps] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  const gotoEdit = (empObj) => {
    navigate("/edit", { state: empObj });
  };

  const deleteEmpById = async (id) => {
    try {
      let res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/emp-api/employees/${id}`
      );

      if (res.status === 200) {
        getEmps();
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function getEmps() {
    try {
      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/emp-api/employees`
      );

      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getEmps();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <h1 className="text-4xl font-bold text-purple-600 animate-pulse">
          Loading Employees...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-6 py-10">
      
      <div className="text-center mb-12">
        
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Employee Dashboard
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Manage all employees in one place
        </p>

        <div className="mt-8 inline-block bg-white/80 backdrop-blur-sm rounded-3xl px-10 py-8 shadow-xl">
          
          <p className="text-gray-600 text-xl mb-3">
            Current Counter
          </p>

          <h1 className="text-6xl font-extrabold text-purple-600">
            {counter}
          </h1>

          <button
            onClick={changeCounter}
            className="mt-6 px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Change Counter
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:scale-105 transition duration-300"
          >
            
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {empObj.empname?.charAt(0).toUpperCase()}
            </div>

            <div className="text-center mt-5">
              
              <h2 className="text-2xl font-bold text-gray-800">
                {empObj.empname}
              </h2>

              <p className="text-gray-600 mt-2 break-all">
                {empObj.email}
              </p>

              <p className="text-purple-500 mt-2 font-medium">
                {empObj.designation}
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              
              <button
                onClick={() => gotoEmployee(empObj)}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:scale-105 transition duration-300"
              >
                View
              </button>

              <button
                onClick={() => gotoEdit(empObj)}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition duration-300"
              >
                Edit
              </button>

              <button
                onClick={() => deleteEmpById(empObj._id)}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:scale-105 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {emps.length === 0 && (
        <div className="text-center mt-20">
          <h1 className="text-4xl text-gray-600">
            No Employees Found
          </h1>
        </div>
      )}
    </div>
  );
}

export default ListOfEmps;