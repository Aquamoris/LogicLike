import React from 'react';
import styles from './CoursesGrid.module.scss';
import {CourseType} from "../../utils/types/course.type.ts";
import Course from "../Course/Course.tsx";

interface ICoursesGrid {
    courses: CourseType[]
}

const CoursesGrid:React.FC<ICoursesGrid> = React.memo(({ courses }) => {
    return (
        <div className={styles.coursesGrid}>
            {
                courses.map(course => <Course
                    name={course.name}
                    id={course.id}
                    image={course.image}
                    bgColor={course.bgColor}
                    tags={course.tags}
                    key={course.id}
                />)
            }
        </div>
    );
});

export default CoursesGrid;