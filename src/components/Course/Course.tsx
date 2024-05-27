import React from 'react';
import styles from './Course.module.scss';
import type {CourseType} from "../../utils/types/course.type.ts";

const Course: React.FC<Partial<CourseType>> = React.memo(({ name, image, bgColor }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper} style={{backgroundColor: bgColor}}>
                <img src={image} alt={name} />
            </div>

            <div className={styles.nameWrapper}>
                <span>{name}</span>
            </div>
        </div>
    );
});

export default Course;