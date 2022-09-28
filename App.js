import { useState } from "react";
import NewUser from "./components/NewUser";
import User from "./components/User";

const App = () => {
  const [list, changeList] = useState([
    {
      id: 1,
      name: "kartik",
      age: 21,
    },
    {
      id: 2,
      name: "Vivek",
      age: 20,
    },
  ]);

  const AddNewUser = (obj) => {
    obj = { id: Math.random(), ...obj };
    changeList([obj, ...list]);
  };

  return (
    <div>
      <NewUser new={AddNewUser} />
      <User userlist={list} />
    </div>
  );
};

export default App;
