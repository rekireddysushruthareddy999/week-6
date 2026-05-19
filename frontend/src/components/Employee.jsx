import React from "react";
import { useLocation, useNavigate } from "react-router";

function Employee() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-10">
      
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transition duration-300 hover:shadow-purple-300">
        
        <div className="text-center mb-10">
          
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
            {state.empname?.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-4xl font-bold mt-5 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Employee Profile
          </h1>

          <p className="text-gray-600 mt-2">
            Complete Employee Information
          </p>
        </div>

        <div className="space-y-4">
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-purple-500 mb-1">
              Employee Name
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              {state.empname}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-purple-500 mb-1">
              Email Address
            </p>

            <h2 className="text-lg text-gray-700 break-all">
              {state.email}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-purple-500 mb-1">
              Mobile Number
            </p>

            <h2 className="text-lg text-gray-700">
              {state.mobile}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-purple-500 mb-1">
              Designation
            </p>

            <h2 className="text-lg text-gray-700">
              {state.designation}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-purple-500 mb-1">
              Company Name
            </p>

            <h2 className="text-lg text-gray-700">
              {state.companyName}
            </h2>
          </div>
        </div>

        <div className="flex gap-4 mt-10">
          
          <button
            onClick={() => navigate("/list")}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Back
          </button>

          <button
            onClick={() => navigate("/edit", { state })}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Employee;