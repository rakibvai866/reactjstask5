import {useContext} from "react";
import { StudentContext } from "../contexts/Student"; 

const StudentForm = () => {
  const studentCtx = useContext(StudentContext);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!studentCtx.studentName.trim()) return;

    studentCtx.editMode ? updateHandler(e) : createHandler();
  };

  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentCtx.studentName,
      isPresent: undefined,
    };

    studentCtx.setStudents([...studentCtx.students, newStudent]);
    studentCtx.setStudentName("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    const updatedStudentList = studentCtx.students.map((student) => {
      if (student.id === studentCtx.editableStudent.id) {
        return { ...student, name: studentCtx.studentName };
      }
      return student;
    });

    studentCtx.setStudents(updatedStudentList);
    studentCtx.setStudentName("");
    studentCtx.setEditMode(false);
  };

  return (
    <form className="student-form" onSubmit={submitHandler}>
      <input
        type="text"
        value={studentCtx.studentName}
        onChange={(e) => studentCtx.setStudentName(e.target.value)}
      ></input>
      <button type="submit">{studentCtx.editMode ? "Update" : "Add"}</button>
    </form>
  );
};

export default StudentForm;
