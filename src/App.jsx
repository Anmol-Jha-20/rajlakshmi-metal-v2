import "./App.css";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen text-white">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </>
  );
}

export default App;
