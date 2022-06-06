import logo from "./logo.svg";
import "./App.css";
import { useContext, useState } from "react";
import { AuthContext } from "./context/authContext";
import { CometChat } from "@cometchat-pro/chat";
import { AUTH_KEY } from "./constants/constants";

function App() {
  const [userName, setUserName] = useState("");
  const { login } = useContext(AuthContext);

  const handleText = (e) => {
    setUserName(e.target.value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const data = await login(userName);

    // var uid = "user1";
    // var name = "Kevin";

    // var user = new CometChat.User(uid);
    // user.setName(name);
    // CometChat.createUser(user, AUTH_KEY).then(
    //   (user) => {
    //     console.log("user created", user);
    //   },
    //   (error) => {
    //     console.log("error", error);
    //   }
    // );
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="author-container">
          <form onSubmit={formSubmit}>
            <p>Login</p>
            <p>
              <input onChange={(e) => handleText(e)} />
            </p>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
