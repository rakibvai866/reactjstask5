import { useContext } from "react";
import { StudentContext } from "../contexts/Student";
import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";
import AbsentStudents from "./AbsentStudents";

const StudentSection = () => {
  const studentCtx = useContext(StudentContext);
  const toggleHandler = (student) => {
    const newStudentList = studentCtx.students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !item.isPresent };
      }
      return item;
    });
    studentCtx.setStudents(newStudentList);
  };

  return (
    <div className="student-section">
      <AllStudents />
      <PresentStudents toggleHandler={toggleHandler} />
      <AbsentStudents toggleHandler={toggleHandler} />
    </div>
  );
};

export default StudentSection;
