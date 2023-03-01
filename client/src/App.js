import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Countries from "./pages/Countries";
import EditPost from "./pages/EditPost";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import OtherProfile from "./pages/OtherProfile";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetails";
const App = () => {
  const LoggedIn = () => {
    let token = localStorage.getItem("authToken");
    return token ? <Outlet /> : <Navigate to="/" />;
  };

  const NotLoggedIn = () => {
    let token = localStorage.getItem("authToken");

    return !token ? <Outlet /> : <Navigate to="/" />;
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />

        <Route path="/country/:id" element={<CountryDetails />} />
        <Route path="/posts" element={<Posts />} />

        <Route element={<LoggedIn />}>
          <Route path="/other-profile/:id" element={<OtherProfile />} />
          <Route path="/post/:id" element={<EditPost />} />

          <Route path="/edit-profile/:id" element={<EditProfile />} />

          <Route path="/new-post" element={<NewPost />} />
          <Route path="/profile/:id" element={<Profile />} />
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
