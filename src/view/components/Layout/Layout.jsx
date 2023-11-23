import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import { Outlet } from "react-router-dom";
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
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
