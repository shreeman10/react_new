import { useState, useEffect } from "react";

const UserList = ({ initialUsers, onUserSelect }) => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filtered = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setUsers(filtered);
  }, [search, initialUsers]);

  const handleClick = (user) => {
    onUserSelect(user);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleClick(user)}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;