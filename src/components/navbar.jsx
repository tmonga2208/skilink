import React from "react";
import {Link} from "react-router-dom"
import styles from '../css/navbar.module.css'

function Navbar(){
    return(
        <div>
        <nav className={styles.navbar}>
            {/* <img src={img0} alt="logo"><Link></Link></img> */}
            <ul className={styles.links}>
                <li>
                    <Link className={styles.nav_items} to="/home">Home</Link>
                </li>
                <li>
                    <Link className={styles.nav_items} to="/services">Services</Link>
                </li>
                <li>
                    <Link className={styles.nav_items} to="/aboutus">About</Link>
                </li>
                <li>
                    <Link className={styles.nav_items} to="/test">Testimonals</Link>
                </li>
                <li>
                    <Link className={styles.nav_items} to="/contactus">Contact</Link>
                </li>
            </ul>
            <div className={styles.profile}>
                <div className={styles.dropdown}>
                    <Link>
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 29 29" id="user" width="32" fill="white">
                    <path d="M14.5 2A12.514 12.514 0 0 0 2 14.5 12.521 12.521 0 0 0 14.5 27a12.5 12.5 0 0 0 0-25Zm7.603 19.713a8.48 8.48 0 0 0-15.199.008A10.367 10.367 0 0 1 4 14.5a10.5 10.5 0 0 1 21 0 10.368 10.368 0 0 1-2.897 7.213ZM14.5 7a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 14.5 7Z"></path>
                    </svg>
                    </Link>
                    <ul className={styles.dropdownmenu}>
                    <li>
                    <Link className={styles.useritems} to="/login">Log In</Link>
                    </li>
                    </ul>

                </div>
            
            </div>
        </nav>
        </div>
    );
}

export default Navbar;