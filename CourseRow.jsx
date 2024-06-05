import courses from "./courseData";
import Course from "./Course";

export default function CourseRow() {
  return (
    <div className="CourseRow">
      {courses.map((course, index) => (
        <Course
          key={index}
          title={course.title}
          description={course.description}
          label={course.label}
          image={course.image}
        />
      ))}
    </div>
  );
}
