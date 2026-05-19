import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { counterContextObj } from "../contexts/ContextProvider";

function CreateEmp() {
  const { changeCounter } = useContext(counterContextObj);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      setError("");

      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/emp-api/employees`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEmpObj),
        }
      );

      let data = await res.json();

      if (res.status === 201) {
        changeCounter();
        reset();

        setTimeout(() => {
          navigate("/list");
        }, 700);
      } else {
        throw new Error(data.reason || "Unable to create employee");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-10">
      
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="w-full max-w-lg bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl"
      >
        
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-8">
          Create Employee
        </h1>

        <div className="space-y-5">
          
          <div>
            <input
              type="text"
              placeholder="Employee Name"
              {...register("empname", { required: true })}
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition"
            />

            {errors.empname && (
              <p className="text-red-500 text-sm mt-1">
                Employee name is required
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                Email is required
              </p>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Mobile Number"
              {...register("mobile", { required: true })}
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition"
            />

            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">
                Mobile number is required
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Designation"
              {...register("designation", { required: true })}
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition"
            />

            {errors.designation && (
              <p className="text-red-500 text-sm mt-1">
                Designation is required
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Company Name"
              {...register("companyName", { required: true })}
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition"
            />

            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">
                Company name is required
              </p>
            )}
          </div>
        </div>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-2xl text-sm mt-5">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-7 py-4 rounded-2xl text-white font-semibold text-lg transition duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 shadow-lg"
          }`}
        >
          {loading ? "Creating..." : "Create Employee"}
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;