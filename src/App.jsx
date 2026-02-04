import Auth from "./pages/Auth";
import Home from "./pages/home/Home";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Explore from "./pages/explore/Explore";
import Messages from "./pages/messages/Messages";
import Chat from "./pages/chat/Chat";
import Profile from "./pages/profile/Profile";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Auth />} />
        <Route path="/messages/:id" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;