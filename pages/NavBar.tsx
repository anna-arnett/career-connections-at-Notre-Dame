import React, { useState } from "react";
import styles from "../components/navbar.module.css"
import { Link } from "react-router-dom"; // doesn't work for some reason?? 

const Navbar: React.FC = () => {
  const [menuClick, setMenuClick] = useState(false);

  const toggleMenu = () => setMenuClick(!menuClick);
  const closeMenu = () => setMenuClick(false);

  const redirectToHome = () => {
    window.location.href = "/"; // Change the URL to the desired path
  };

  const redirectToCourses = () => {
    window.location.href = "/courses"; // Change the URL to the desired path
  };

  const redirectToSignIn = () => {
    window.location.href = "/LoginPage"; // Change the URL to the desired path
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarcontainer}>
          <span className={styles.navbarlogo} onClick={redirectToHome}>
            Odyssey
          </span>
          <div className={styles.MenuIcon} onClick={toggleMenu}>
            {menuClick ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </div>
          <ul className={menuClick ? styles.navmenuactive : styles.navmenu}>
            <li className={styles.navlinks}>
              <span
                className={styles.navlinks}
                onClick={() => redirectToCourses()}
              >
                Courses
              </span>
            </li>
            <li className={styles.navlinks}>
              <span
                className={styles.navlinks}
                onClick={() => redirectToSignIn()}
              >
                Sign In
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;