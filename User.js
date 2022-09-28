import Card from "./Card";
import UserList from "./UserList";
import classes from "./UserList.module.css"
const User = (props) => {
  return (
    <Card className={classes.users}>
    <ul>
      {props.userlist.map((element) => {
        return (
          <UserList  key={element.id} objname={element.name} age={element.age} />
        );
      })}
    </ul>
    </Card>
  );
};

export default User;
