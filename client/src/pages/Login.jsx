import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { post } from "../services/authService";

const Login = () => {
  const { authenticateUser } = useContext(AuthContext);
  const [thisUser, setThisUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setThisUser((recent) => ({ ...recent, [e.target.name]: e.target.value }));
    console.log("changing user", thisUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/auth/login", thisUser)
      .then((results) => {
        console.log(results.data);
        navigate(`/profile/${results.data._id}`);
        localStorage.setItem("authToken", results.data.token);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        authenticateUser();
      });
  };
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={thisUser.email}
          onChange={handleChange}
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          name="password"
          value={thisUser.password}
          onChange={handleChange}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
