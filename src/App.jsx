import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css';
import { useState } from 'react';
import Tasklist from './components/TaskList';
import TaskView from './components/TaskView';
import TopBar from './components/TopBar';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      company: 'Yritys',
      title: 'Task 1',
      link: 'task1link',
      text: 'Task 1 details...',
      timestamp: new Date().toISOString(), // Set initial timestamp to current time
    },
    {
      id: 2,
      company: 'Yritys',
      title: 'Task 2',
      link: 'task2link',
      text: 'Task 2 details...',
      timestamp: new Date().toISOString(), // Set initial timestamp to current time
    },
    {
      id: 3,
      company: 'Yritys',
      title: 'Task 3',
      link: 'task3link',
      text: 'Task 3 details...',
      timestamp: new Date().toISOString(), // Set initial timestamp to current time
    },
  ]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showTaskList, setShowTaskList] = useState(true);

  const handleAddTask = () => {
    const newTask = {
      id: Math.max(...tasks.map((task) => task.id), 0) + 1, // Generate a new ID (Replace this with your ID generation logic)
      company: 'New Company', // Placeholder values for the new task
      title: 'New Task',
      link: 'newTaskLink',
      text: 'New Task details...',
    };
    setTasks([...tasks, newTask]); // Add the new task to the tasks array
    setSelectedTask(newTask); // Set the newly added task as selected
    setShowTaskList(false); // Hide the task list
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleToggleTaskList = () => {
    setShowTaskList(!showTaskList);
    setSelectedTask(null); // Reset selectedNote when toggling list visibility
  };

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
    setShowTaskList(false);
  };

  const sortedTasks = tasks.sort((a, b) => b.timestampField - a.timestampField);

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return {
          ...updatedTask,
          timestamp: new Date().toISOString(), // Update timestamp to current time
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <MantineProvider defaultColorScheme='dark'>
      <>
        <TopBar
          showTaskList={showTaskList}
          onToggleTaskList={handleToggleTaskList}
        />

        {showTaskList ? (
          <Tasklist
            tasks={sortedTasks}
            onTaskSelect={handleTaskSelect}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
          />
        ) : (
          <TaskView selectedTask={selectedTask} />
        )}
      </>
    </MantineProvider>
  );
}

export default App;
