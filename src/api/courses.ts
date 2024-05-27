import axios from "axios";
import type {CourseType} from "../utils/types/course.type.ts";

export async function getCourses(): Promise<CourseType[]> {
    try {
        const response = await axios.get('https://logiclike.com/docs/courses.json');

        return response.data;
    }
    catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message);
        } else {
            throw new Error('Произошла неизвестная ошибка');
        }
    }
}