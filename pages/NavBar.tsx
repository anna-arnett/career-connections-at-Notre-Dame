import React, { useState } from "react";
import styles from "../components/navbar.module.css"
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuClick, setMenuClick] = useState(false);

  const toggleMenu = () => setMenuClick(!menuClick);
  const closeMenu = () => setMenuClick(false);

  return (
    <>
      <div className="w-full h-[5vh] flex mx-4 items-center justify-center">

        {/* this is the container */}
        <div className="flex w-full max-w-5xl justify-between">

          {/* this is the home button */}
          <Link href="/">
            Odyssey
          </Link>

          {/* this is the container for the right side of the menu buttons */}
          <div className="flex gap-4">
            <Link href="/">
              <p>
                Courses
              </p>
              </Link>
            
            {/* we will make a button component and use it for login button */}
              <Link href="LoginPage">
              <p>
                Login
              </p>  
              </Link>
          </div>

          {/* <div className={styles.MenuIcon} onClick={toggleMenu}>
            {menuClick ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;