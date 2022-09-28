const UserList = (props)=>{
    return <li>
        {props.objname+"     "}
        {`(${props.age} years old )`}
    </li>
}

export default UserList;