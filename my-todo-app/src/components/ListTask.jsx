import { useSelector } from "react-redux";
import Task from "./Task";
import { useState } from "react";

const ListTask = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const [filter, setFilter] = useState("all");

  const filteredTasks =
    filter === "done"
      ? tasks.filter((t) => t.isDone)
      : filter === "notDone"
      ? tasks.filter((t) => !t.isDone)
      : tasks;

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("done")}>Done</button>
      <button onClick={() => setFilter("notDone")}>Not Done</button>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
