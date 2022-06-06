import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const handleText = (e) => {
    setUserName(e.target.value);
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    const data = await login(userName);
  };
  return (
    <>
      <div className="author-container">
        <form onSubmit={formSubmit}>
          <p>Login</p>
          <p>
            <input onChange={(e) => handleText(e)} />
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
