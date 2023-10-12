import React, { useState, useEffect } from 'react';

const AdminHome = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    // TODO: Fetch students from your API or database and update the students state
    const mockStudents = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      // Add more students as needed
    ];
    setStudents(mockStudents);
  };

  const handleDeleteStudent = (studentId) => {
    // TODO: Implement student deletion logic here
    console.log('Deleting student with ID:', studentId);
  };

  return (
    <div>
      <div style={{ margin: 'auto' }}>
        <h3>Student List</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <button onClick={() => console.log('Edit student:', student.id)}>Edit</button>
                  <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;