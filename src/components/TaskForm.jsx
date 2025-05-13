import React, { useState } from 'react';
import { getUser } from '../utils/cookies';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    remarks: ''
  });

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = getUser();
    const timestamp = new Date().toISOString();
    addTask({
      ...task,
      createdOn: timestamp,
      lastUpdatedOn: timestamp,
      createdBy: user,
      lastUpdatedBy: user
    });
    setTask({ title: '', description: '', dueDate: '', status: 'Pending', remarks: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="title" value={task.title} onChange={handleChange} placeholder="Task Title" required />
      <textarea name="description" value={task.description} onChange={handleChange} placeholder="Task Description" required />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <select name="status" value={task.status} onChange={handleChange}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <input name="remarks" value={task.remarks} onChange={handleChange} placeholder="Remarks" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
