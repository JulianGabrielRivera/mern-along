import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Countries from "./pages/Countries";
import EditPost from "./pages/Editpost";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import OtherProfile from "./pages/OtherProfile";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
const App = () => {
  let token = localStorage.getItem("authToken");

  const LoggedIn = () => {
    return token ? <Outlet /> : <Navigate to="/" />;
  };

  const NotLoggedIn = () => {
    return !token ? <Outlet /> : <Navigate to="/" />;
  };
  return (
    <div>
      <Navbar />
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<Countries />} />

      <Routes>
        <Route element={<LoggedIn />}>
          <Route path="/posts" element={<Posts />} />

          <Route path="/other-profile/:id" element={<OtherProfile />} />
          <Route path="/post/:id" element={<EditPost />} />

          <Route path="/edit-profile/:id" element={<EditProfile />} />

          <Route path="/new-post" element={<NewPost />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<NotLoggedIn />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
