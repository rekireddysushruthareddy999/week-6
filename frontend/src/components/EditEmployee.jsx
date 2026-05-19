import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

function EditEmployee() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const { state } = useLocation();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setValue("empname", state.empname);
    setValue("email", state.email);
    setValue("mobile", state.mobile);
    setValue("designation", state.designation);
    setValue("companyName", state.companyName);
  }, []);

  const saveModifiedEmp = async (modifiedEmp) => {
    try {
      setLoading(true);

      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/emp-api/employees/${state._id}`,
        modifiedEmp
      );

      if (res.status === 200) {
        setMessage("Employee Updated Successfully");

        setTimeout(() => {
          navigate("/list");
        }, 1200);
      }
    } catch (err) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-10">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transition duration-300 hover:shadow-purple-300">
        
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Edit Employee
        </h1>

        {message && (
          <div className="mb-5 text-center bg-green-100 text-green-700 p-3 rounded-xl">
            {message}
          </div>
        )}

        <form
          className="space-y-5"
          onSubmit={handleSubmit(saveModifiedEmp)}
        >
          <div>
            <input
              type="text"
              placeholder="Employee Name"
              {...register("empname", {
                required: "Employee name is required",
              })}
              className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
            {errors.empname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.empname.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              disabled
              className="w-full p-4 rounded-xl bg-gray-100 border border-gray-300 text-gray-500 cursor-not-allowed"
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Mobile Number"
              {...register("mobile", {
                required: "Mobile number is required",
              })}
              className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mobile.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Designation"
              {...register("designation")}
              className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Company Name"
              {...register("companyName")}
              className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl text-white text-lg font-semibold transition duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105"
            }`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;