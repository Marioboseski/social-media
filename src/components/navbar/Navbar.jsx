import { Link } from "react-router-dom";
import { House, CircleArrowOutUpRightIcon, Send, Bookmark, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <nav className="fixed bottom-0 w-full max-w-[450px] bg-white p-3 md:top-0 md:left-0
        md:w-full md:max-w-32
         md:border-r-2
        md:flex md:justify-center">
        <ul className="flex justify-around items-center md:flex-col md:justify-evenly">
          <Link to={"/home"}><House size={33}/></Link>
          <Link to={"/bookmarks"}><Bookmark size={33}/></Link>
          <Link to={"/explore"}><CircleArrowOutUpRightIcon size={33}/></Link>
          <Link to={"/messages"}><Send size={33}/></Link>
          <Link to={"profile"}><User size={33}/></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;