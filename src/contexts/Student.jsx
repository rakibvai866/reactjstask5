import { useState, createContext } from "react";

export const StudentContext = createContext();

const StudentProvider = (props) => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const contextValue = {
    studentName,
    setStudentName,
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
  };
  return (
    <StudentContext.Provider value={contextValue}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
