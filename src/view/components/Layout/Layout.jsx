import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import { Outlet } from "react-router-dom";
import { useThemeContext } from "../../../context/ThemeContext";
import './Layout.css'

function Layout() {
  const { contextTheme } = useThemeContext();

  return (
    <div className="layout" id={contextTheme}>
      <NavBar />
      <main className="layout__main">
        <Outlet />
      </main>
      <footer className="layout__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
