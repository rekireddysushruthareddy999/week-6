import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import CreateEmp from "./components/CreateEmp";
import ListOfEmps from "./components/ListOfEmp";
import Employee from "./components/Employee";
import EditEmp from "./components/EditEmp";
import { useState } from "react";
import Header from "./components/Header";
import ContextProvider from "./context/ContextProvider";


function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home />},
        { path: "create-emp", element: <CreateEmp /> },
        { path: "list", element: <ListOfEmps /> },
        {path:"emp",element:<Employee/>},
        {path:"edit-emp",element:<EditEmp/>}
      ],
    },
  ]);

  return(
    <div>
     <RouterProvider router={routerObj} />;
     </div>
  )
}

export default App;

