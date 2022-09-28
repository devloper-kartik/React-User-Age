import Card from "./Card";
import classes from "./ErrorPage.module.css";
const ErrorPage=(props)=>{
    return(
        <div>
        <div className={classes.backdrop}/>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.msg}</p>
            </div>
            <footer className={classes.actions}>
                <button onClick={()=>{props.err()}}>Okay</button>
            </footer>
        </Card>
        </div>
    );
}

export default ErrorPage;