import { User } from "lucide-react";
import { Camera } from "lucide-react";
import { Bookmark } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../../context/ProfileContext";
import { Link, replace } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/", { replace: true });
  }
  return (
    <div className="flex flex-col gap-3 p-3">

      <div className="flex justify-center items-center gap-3">
        <User className="w-full max-w-28 min-h-28 border-2 border-gray-500 rounded-full p-2 bg-gray-300 " />
        <p>0<p>posts</p></p>
        <p>163<p>Followers</p></p>
        <p>150<p>Following</p></p>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-2xl">{user?.name}</p>
        <p className="text-xl">{user?.email}</p>
        <button onClick={handleLogout} className="border-2 border-gray-500 rounded-md text-lg font-semibold p-1 w-full max-w-[220px] hover:bg-gray-300">Logout</button>
        <Camera className="w-full max-w-44 min-h-44" />
        <p>/No Posts</p>
      </div>

      <Link to={"/bookmarks"} className="flex items-center gap-1 text-xl border-2 border-gray-400 w-full max-w-40 hover:bg-gray-400 hover:text-white "><Bookmark />Saved</Link>

    </div>
  );
}

export default Profile;