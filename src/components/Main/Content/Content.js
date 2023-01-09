import classes from './Content.module.css'

function Content(props) {

    return (
        <div className={classes.content}>
            <img src={props.imageSrc} />
            <p>{props.description}</p>

        </div>
    )
}

export default Content;