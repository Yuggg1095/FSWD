import { useState } from 'react';
import './App.css'; // Assuming you have some basic styling

function App() {
  // State to store tasks - initialized as empty array
  const [tasks, setTasks] = useState([]);
  // State for new task input
  const [newTask, setNewTask] = useState('');

  // Handle adding new tasks
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return; // Prevent empty tasks
    
    setTasks([...tasks, { 
      id: Date.now(), // Unique ID using timestamp
      text: newTask,
      completed: false 
    }]);
    setNewTask(''); // Clear input after adding
  };

  // Handle removing tasks
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      
      {/* Form to add new tasks */}
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      {/* Conditional rendering based on tasks length */}
      {tasks.length === 0 ? (
        <p>No tasks yet! Add some tasks to get started.</p>
      ) : (
        <ul>
          {/* Dynamically render tasks using map */}
          {tasks.map(task => (
            <li key={task.id}>
              {task.text}
              <button 
                onClick={() => removeTask(task.id)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;