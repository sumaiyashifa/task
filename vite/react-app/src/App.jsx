import "./App.css";
import "./index.css";
import { Card } from "./component/card";
import Form from "./component/form";
import users from "./users.json";
import useFetch from "../src/useFetch";
import { useState } from "react";
function App() {
  const data = useFetch();
  console.log(data);
  const [filter, SF] = useState('');

  const FD = data?.filter((user) =>
    user.username.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1 className="h1">Home Page</h1>
      <div className="ip">
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={(e) => SF(e.target.value)}
        ></input>
      </div>

      {FD &&
        FD?.map((user) => (
          <Card
            key={user.id}
            username={user.username}
            name={`I am ${user.name}`}
            email={user.email}
          />
        ))}
      <Form />
    </>
  );
}

export default App;
