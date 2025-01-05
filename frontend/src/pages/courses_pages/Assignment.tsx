import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useState } from 'react';

type Assignment = {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: string;
};

const Assignment: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [title, setTitle] = useState('');
  const [course, setCourse] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  
  const addAssignment = () => {
    if (title && course && dueDate && status) {
      const newAssignment: Assignment = {
        id: Math.random().toString(36).substring(7), // Generate a random ID
        title,
        course,
        dueDate,
        status,
      };
      setAssignments([...assignments, newAssignment]);
      setTitle('');
      setCourse('');
      setDueDate('');
      setStatus('');
    } else {
      alert('Please fill all the fields');
    }
  };
  const deleteAssignment = (id: string) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };
  return (
    <>
    <div className='px-11'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold '>Assignments</h1>
        <div className='flex items-center gap-3'>
        <IoIosSearch
                    size={20}
                    className=""
                  />
        <h4 className='text-sm'>Filter by </h4>
        <h4 className='text-sm text-orange-600'>Date </h4>
        <h4 className='text-sm'>| </h4>
        <h4 className='text-sm text-orange-600'>Status</h4>
        </div>
    </div>
    <h2 className='text-xl'>View and manage your course assignments</h2>
    </div>
    {/* Form to Add Assignment */}
    <  div className="px-11 flex gap-9 mt-4 mb-4"> 

        <input
          type="text"
          className="border rounded-md text-center w-64 p-2 mr-2"
          placeholder="Assignment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="border rounded-md text-center p-2 mr-2"
          placeholder="Course/Lesson"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          type="date"
          className="border rounded-md p-2 mr-2"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select
          className="border rounded-md p-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          className="ml-4 px-4 py-2 rounded-3xl bg-orange-500 text-white"
          onClick={addAssignment}
        >
          Add Assignment
        </button>
      </div>

      {/* Display List of Assignments */}
      <div className="space-y-4 px-11">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="p-4 border rounded-lg shadow-sm bg-white w-full flex flex-col gap-4"
          >
            {/* Assignment Details in Columns */}
            <div className="grid grid-cols-5 gap-4 w-full items-center">
              {/* Assignment Title */}
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">{assignment.title}</h3>
              </div>

              {/* Course/Lesson */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">{assignment.course}</p>
              </div>

              {/* Due Date */}
              <div className="flex flex-col">
                <p className="text-sm">{new Date(assignment.dueDate).toLocaleDateString()}</p>
              </div>

              {/* Status */}
              <div className="flex flex-col">
                <p
                  className={`font-semibold ${
                    assignment.status === 'Completed'
                      ? 'text-green-500'
                      : assignment.status === 'Pending'
                      ? 'text-red-500'
                      : 'text-yellow-500'
                  }`}
                >
                  {assignment.status}
                </p>
              </div>

              {/* Delete Button */}
              <div className="flex justify-center">
                <button
                  className="text-red-500"
                  onClick={() => deleteAssignment(assignment.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          ))}
      </div>
      </>
  );
};

export default Assignment;


