import apple from "./Card.module.css";
// import "./NewUser.css"
const Card=(props)=>{
    return <div className={`${apple.card} ${props.className}`}>{props.children}</div>
}

export default Card;