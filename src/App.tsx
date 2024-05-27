import React, {useEffect, useState} from 'react';
import type {CourseType} from "./utils/types/course.type.ts";
import {getCourses} from "./api/courses.ts";
import FilterTags from "./modules/FilterTags/FilterTags.tsx";
import CoursesGrid from "./components/CoursesGrid/CoursesGrid.tsx";
import Loading from "./components/Loading/Loading.tsx";

const App: React.FC = () => {
    const [courses, setCourses] = useState<CourseType[]>([]);
    const [coursesToShow, setCoursesToShow] = useState<CourseType[]>([]);
    const [filterTags, setFilterTags] = useState<Set<string>>(new Set(['Все темы']));
    const [currentFilterTag, setCurrentFilterTag] = useState<string>('Все темы');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchCourses = async () => {

            const fetchedCourses = await getCourses()

            setCourses(fetchedCourses);
            fetchedCourses.forEach(course => {
                course.tags.forEach(tag => {
                    setFilterTags(prev => new Set([...prev, tag]))
                })
            })

        }

        setIsLoading(true);
        fetchCourses();
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (currentFilterTag !== 'Все темы') {
            setIsLoading(true);

            setCoursesToShow(courses.filter(course => {
                if (course.tags.includes(currentFilterTag)) return course;
            }));

            setIsLoading(false);
        } else {
            setCoursesToShow(courses);
        }
    }, [currentFilterTag, courses]);

    return (
        <div className='container'>
            <FilterTags currentFilterTag={currentFilterTag} tags={Array.from(filterTags)} setCurrentFilterTag={setCurrentFilterTag}/>
            { isLoading ? <Loading /> : <CoursesGrid courses={coursesToShow}/>}
        </div>
    );
};

export default App;