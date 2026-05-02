import { useState, useEffect } from "react";


interface UserListProp {
    initialUsers:User[];
    onUserSelect(user:User):void
}

interface User {
    id:number;
    name:string;
    age:number;
}

const UserList = ({ initialUsers, onUserSelect }:UserListProp) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const filtered = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setUsers(filtered);
  }, [search, initialUsers]);

  const handleClick = (user:User) => {
    onUserSelect(user);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
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