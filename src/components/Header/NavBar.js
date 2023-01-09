import { useState } from 'react';
import Hamburger from './Hamburger';
import classes from './NavBar.module.css'

function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    function showMenuHandler() {

        setShowMenu((showMenu) => {

            return !showMenu;
        })
    }

    return (
        <nav className={classes.navbar}>
            <Hamburger clickHandler={showMenuHandler} showMenu={showMenu} />
            <ul className={showMenu ? classes.mobactive : classes.display}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Products</a></li>
            </ul>




        </nav>


    )
}

export default NavBar;