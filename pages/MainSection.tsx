import React, {useState} from "react";
import styles from "../components/MainSection.module.css";

const MainSection: React.FC = () => {
    return (
      <>
        <div className={styles.maincontainer}>
            <div className={styles.courseHeading}>Courses</div>
                <div className={styles.CourseInformation}>
                    <h3 className={styles.CourseTitle}>Data Structures</h3>
                    <h3 className={styles.CourseID}>CSE 20312</h3>
                    <h4 className={styles.Rating}>2/5</h4>
                    <h4 className={styles.Difficulty}>Easy</h4>
                    <p className={styles.professor}>Peter Bui</p>
                </div>
        </div>
      </>
    );
}

export default MainSection;