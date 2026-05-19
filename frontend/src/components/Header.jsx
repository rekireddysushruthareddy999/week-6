import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md border-b border-white/30">
      
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Employee
          </h1>

          <p className="text-gray-600 text-sm">
            Employee Details
          </p>
        </div>

        <div className="flex items-center gap-4 text-md font-medium">
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-5 py-2 rounded-xl transition duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-purple-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/create-emp"
            className={({ isActive }) =>
              `px-5 py-2 rounded-xl transition duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-pink-100"
              }`
            }
          >
            Create Employee
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              `px-5 py-2 rounded-xl transition duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            Employees
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;