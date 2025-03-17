import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTask({ id: uuidv4(), description: task, isDone: false }));
      setTask("");
    }
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
