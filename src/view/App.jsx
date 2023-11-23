import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { TaskProvider } from "../context/task";
import { ThemeContextProvider } from "../context/ThemeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <TaskProvider>
        <RouterProvider router={router} />
      </TaskProvider>
    </ThemeContextProvider>
  );
};
export default App;
