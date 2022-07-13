import { useState } from 'react';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [task, setTask] = useState([]);
  const [inputText, setInputText] = useState('');
  const [taskEditing, setTaskEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  function handleAdd() {
    const newTask = task.concat({
      id: uuidv4(),
      taskval: inputText,
      taskCompletion: false,
    });

    setTask(newTask);
    setInputText('');
  }

  function handleRemove(id) {
    // remove item
    const removeItem = task.filter((item) => item.id !== id);
    setTask(removeItem);
  }

  function submitEdits(id) {
    const updatedTasks = [...task].map((task) => {
      if (task.id === id) {
        task.taskval = editingText;
      }
      return task;
    });
    setTask(updatedTasks);
    setTaskEditing(null);
  }

  return (
    <div className=" pt-10 flex flex-col items-center justify-start h-screen bg-red-200 overflow-scroll">
      <h1 className="text-3xl font-bold">Task</h1>
      <div className="flex   ">
        <input
          type="text"
          className=" w-60 ml-8 shadow appearance-none border rounded py-2 px-3   text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          value={inputText}
          onChange={handleChange}
        />
        <button className="btn" onClick={handleAdd}>
          Add
        </button>
      </div>
      <List
        taskdata={task}
        handleRemove={handleRemove}
        taskEditing={taskEditing}
        setTaskEditing={setTaskEditing}
        setEditingText={setEditingText}
        submitEdits={submitEdits}
      />
    </div>
  );
}

export default App;
