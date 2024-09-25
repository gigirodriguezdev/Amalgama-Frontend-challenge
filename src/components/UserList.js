import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../store/usersSlice';

const UserList = () => {
  const users = useSelector(selectUsers);

  return (
    <div className="p-4 bg-gray-50 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition">
            {user.nickname} - <span className="font-semibold">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
