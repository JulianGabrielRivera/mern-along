import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { LoadingContext } from "../context/load.context";
const Navbar = () => {
  let token = localStorage.getItem("authToken");

  const { user } = useContext(LoadingContext);
  const { logout } = useContext(AuthContext);
  console.log(user);
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/countries"}>Countries</Link>

      <Link to={"/posts"}>Posts</Link>

      {token ? (
        <>
          {user && <Link to={`/profile/${user._id}`}>Profile</Link>}{" "}
          <Link to={"/new-post"}>New Post</Link>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <>
          <Link to={"/signup"}>SignUp</Link>
          <Link to={"/login"}>Login</Link>
        </>
      )}
    </nav>
  );
};
export default Navbar;
