import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const AllStudents = () => {

  const studentCtx = useContext(StudentContext);
  const editHandler = (student) => {
    console.log(student.name);
    studentCtx.setEditMode(true);
    studentCtx.setStudentName(student.name);
    studentCtx.setEditableStudent(student);
  };

  const removeHandler = (studentId) => {
    const deleteStudent = studentCtx.students.filter(
      (student) => student.id !== studentId
    );
    studentCtx.setStudents(deleteStudent);
    console.log(deleteStudent);
  };

  const makePresentHandler = (student) => {
    if (student.isPresent !== false) {
      const newStudentList = studentCtx.students.map((item) => {
        if (item.id === student.id) {
          return { ...item, isPresent: true };
        }
        return item;
      });
      studentCtx.setStudents(newStudentList);
    } else {
      alert("Student is already absent");
    }
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresent !== true) {
      const newStudentList = studentCtx.students.map((item) => {
        if (item.id === student.id) {
          return { ...item, isPresent: false };
        }
        return item;
      });
      studentCtx.setStudents(newStudentList);
    } else {
      alert("Student is already present");
    }
  };

  return (
    <div className="all-students">
      <h2>All Students</h2>
      <ul>
        {studentCtx.students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => editHandler(student)}>Edit</button>
            <button onClick={() => removeHandler(student.id)}>Remove</button>
            <button onClick={() => makePresentHandler(student)}>
              Make Present
            </button>
            <button onClick={() => makeAbsentHandler(student)}>
              Make Absent
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudents;
