import courses from "./courseData.js";
import CourseCard from "./CourseCard";

export default function CourseRow() {
  return (
    <div className="CourseRow">
      {courses.map((course, index) => (
        <CourseCard
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
