import React, { useState, useEffect } from 'react';
import './UserManagement.css';
import UserRoleForm from '../../components/UserRoleForm/UserRoleForm'; // Import UserRoleForm component

const UserManagement = ({ user }) => {
  const [userList, setUserList] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // Fetch user list from the backend
    const fetchUsers = async () => {
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      setUserList(data);
    };
    fetchUsers();
  }, []);

  const handleEditUserRole = (updatedUser) => {
    setUserList(userList.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  if (!user || user.role !== 'admin') {
    return <div>Access Denied</div>;
  }

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <UserRoleForm onSubmit={handleEditUserRole} user={editingUser} />
      <div className="user-list">
        {userList.map(user => (
          <div key={user.id} className="user-item">
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
            <button onClick={() => setEditingUser(user)}>Edit Role</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
