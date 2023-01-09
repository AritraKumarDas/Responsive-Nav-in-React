import classes from './Hamburger.module.css'

function Hamburger(props) {

    return (
        <div className={classes.hamburger} onClick={props.clickHandler}>
            {!props.showMenu && <i className="fa-solid fa-bars"></i>}
            {props.showMenu && <i class="fa-solid fa-xmark"></i>}

        </div>
    )
}

export default Hamburger;