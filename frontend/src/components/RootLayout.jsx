import Header from "./Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      
      <Header />

      <main className="px-4 sm:px-8 md:px-12 py-8">
        
        <div className="min-h-[85vh] bg-white/70 backdrop-blur-sm rounded-[2rem] shadow-2xl p-6 sm:p-10 transition duration-300 hover:shadow-purple-300">
          
          <Outlet />
        
        </div>
      </main>
    </div>
  );
}

export default RootLayout;