import React from "react";
import { router } from "./routes/routes";
import { TasksProvider } from "../context/task";
import { RouterProvider } from "react-router-dom";



function App() {
  return (
    <TasksProvider>
      <RouterProvider router={router} />
    </TasksProvider>
  );
}

export default App;
