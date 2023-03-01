import { post } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";

const SignUp = () => {
  const { authenticateUser } = useContext(AuthContext);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewUser((recent) => ({ ...recent, [e.target.name]: e.target.value }));
    console.log("changing user", newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/auth/signup", newUser)
      .then((createdUser) => {
        console.log(createdUser);
        navigate("/profile");
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
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />
        <button type="submit">signup</button>
      </form>
    </div>
  );
};
export default SignUp;
