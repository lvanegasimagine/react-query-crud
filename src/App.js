import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  const [userId, setUserId] = useState();

  return (
    <div className="App">
      <div
        style={{ padding: 20, width: "30%", borderRight: "2px solid white" }}
      >
        <Users setUserId={setUserId} />
      </div>
      <div style={{ padding: 20, width: "70%" }}>
          <UserDetails userId={userId}/>
      </div>
    </div>
  );
}

export default App;
