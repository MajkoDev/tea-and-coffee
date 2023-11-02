import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-[100vh] w-full flex flex-col justify-between ">
      <Navbar />
      <div className="flex flex-col items-center justify-between">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
