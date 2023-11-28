/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { IconPlus } from '@tabler/icons-react';
import TaskCard from './TaskCard';
import { Button } from '@mantine/core';

const TaskList = ({ tasks, onTaskSelect, onAddTask, onDeleteTask }) => {
  const handleAddTask = () => {
    onAddTask(); // Trigger the function to add a new task
  };
  return (
    <div className='task-list'>
      <h2>Tasks</h2>
      <ul>
        <Button
          fullWidth
          variant='filled'
          color='dark.5'
          size='md'
          radius='md'
          mb='md'
          onClick={handleAddTask}
        >
          <IconPlus size={18} />
        </Button>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={() => onTaskSelect(task)}
            onDelete={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
