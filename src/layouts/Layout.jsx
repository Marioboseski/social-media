import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


const Layout = () => {
  return (
    <div className="pb-16 md:pb-0 ">
      <Outlet/>
      <Navbar/>
    </div>
  );
}

export default Layout;
