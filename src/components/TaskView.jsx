/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const TaskView = ({ selectedTask }) => {
  return (
    <div className='task-view'>
      <div className='task-details'>
        <h2>{selectedTask.title}</h2>
        <div>
          <p>
            <strong>Linkki taskiin:</strong> {selectedTask.link}
          </p>
          <p>
            <strong>Linkki Spacesiin:</strong> {selectedTask.link}
          </p>
          <p>
            <strong>Linkki Shopify-kauppaan:</strong> {selectedTask.link}
          </p>
          <p>Taskin tehtävä:</p>
          <textarea rows='5' cols='30' />
          <p>Mitä on yritetty:</p>
          <textarea rows='5' cols='30' />
          <p>Mikä on ongelma:</p>
          <textarea rows='5' cols='30' />
        </div>
      </div>
    </div>
  );
};

export default TaskView;
