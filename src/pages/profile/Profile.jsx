import { User } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../../context/ProfileContext";

const Profile = () => {
  const { user, logoutUser } = useContext(UserContext);
  return (
    <div>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}

export default Profile;