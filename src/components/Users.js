import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Username</th><th>Email</th><th>Phone</th><th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td><td>{user.username}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
