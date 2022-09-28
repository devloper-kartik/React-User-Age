import { useState } from "react";
import Card from "./Card";
import ErrorPage from "./ErrorPage";
import classes from "./NewUser.module.css";

const NewUser = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState(0);
  const [err, setErr] = useState(false);
  //On submit
  const onSubmitFunction = (e) => {
    e.preventDefault();
    if (enteredName.length <= 0 || enteredAge < 1) {
      setErr(true);
    } else {
      const obj = {
        name: enteredName,
        age: enteredAge,
      };
      props.new(obj);
    }
  };
  //on Input Username
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  //on Input Age
  const onChangeAge = (event) => {
    setAge(event.target.value);
  };
  // for removing error module
  const removeErr = () => {
    setErr(false);
  };
  //for showing error module
  let showError = "";
  if (err) {
    showError = (
      <ErrorPage
        err={removeErr}
        title="Error Occured!"
        msg="Enter Correct Values"
      />
    );
  }

  return (
    <div>
      {showError}
      <Card className={classes.input}>
        <form onSubmit={onSubmitFunction}>
          <label>UserName</label>
          <input onChange={onChangeName} type="text" />
          <label>Age</label>
          <input onChange={onChangeAge} type="number" />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default NewUser;
