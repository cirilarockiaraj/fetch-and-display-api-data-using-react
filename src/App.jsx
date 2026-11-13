import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setUsers(users);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1>API Data</h1>
      <div className="data-container">
        {error && <div className="error">{error}</div>}
        {loading && (
          <div className="loading">
            Loading...
          </div>
        )}
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
