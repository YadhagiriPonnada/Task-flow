import React from 'react';

const TaskList = ({ tasks }) => (
  <div>
    <h2>Tasks</h2>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <p>Remarks: {task.remarks}</p>
          <p>Created By: {task.createdBy.name} on {task.createdOn}</p>
          <p>Last Updated By: {task.lastUpdatedBy.name} on {task.lastUpdatedOn}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default TaskList;
