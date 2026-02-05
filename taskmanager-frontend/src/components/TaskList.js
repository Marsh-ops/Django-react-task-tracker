import { useEffect, useState } from "react";

function TaskList({ token }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:8000/api/tasks/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tasks");
        return res.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [token]);

  if (loading) return <p className="text-center">Loading tasks...</p>;
  if (!tasks.length) return <p className="text-center">No tasks assigned to you.</p>;

  return (
    <div className="my-4">
      <h2 className="mb-3 text-center">Your Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            {task.description && <p className="card-text">{task.description}</p>}
            <span className={`badge ${task.completed ? "bg-success" : "bg-warning"}`}>
              {task.completed ? "Completed" : "Pending"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;