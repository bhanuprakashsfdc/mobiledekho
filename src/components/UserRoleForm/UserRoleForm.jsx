import React, { useState, useEffect } from 'react';
import './UserRoleForm.css';

const UserRoleForm = ({ onSubmit, user }) => {
  const [role, setRole] = useState('');

  useEffect(() => {
    if (user) {
      setRole(user.role);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { ...user, role };
    const response = await fetch(`https://api.example.com/users/${user.id}/role`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    });
    if (response.ok) {
      const data = await response.json();
      onSubmit(data);
    } else {
      alert('Failed to update user role. Please try again.');
    }
  };

  return (
    <form className="user-role-form" onSubmit={handleSubmit}>
      <h2>Edit User Role</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="user">User</option>
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Update Role</button>
    </form>
  );
};

export default UserRoleForm;
