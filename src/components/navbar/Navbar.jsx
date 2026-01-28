import { Link } from "react-router-dom";
import { House } from "lucide-react";
import { CircleArrowOutUpRightIcon } from "lucide-react";
import { Send } from "lucide-react";
import { Bookmark } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <nav className="fixed bottom-0 w-full max-w-[450px] bg-white p-3">
        <ul className="flex justify-around">
          <Link to={"/home"}><House size={33}/></Link>
          <Link to={"/bookmarks"}><Bookmark size={33}/></Link>
          <Link to={"/explore"}><CircleArrowOutUpRightIcon size={33}/></Link>
          <Link to={"/messages"}><Send size={33}/></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;