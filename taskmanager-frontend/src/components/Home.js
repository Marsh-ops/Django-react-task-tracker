export default function Home() {
  return (
    <div className="text-center my-5">
      <div className="p-5 bg-light rounded shadow">
        <h1 className="display-4">Task Manager</h1>
        <p className="lead">Welcome! This is a multi-tenant task manager built with Django REST Framework and React.</p>
        <p className="text-muted">Login to view your tasks.</p>
      </div>
    </div>
  );
}