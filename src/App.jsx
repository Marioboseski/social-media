import Auth from "./pages/Auth";
import Home from "./pages/home/Home";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Explore from "./pages/explore/Explore";
import Messages from "./pages/messages/Messages";
import Chat from "./pages/chat/Chat";
import Profile from "./pages/profile/Profile";
import Layout from "./layouts/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:id" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

        </Route>
        <Route path="/" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;