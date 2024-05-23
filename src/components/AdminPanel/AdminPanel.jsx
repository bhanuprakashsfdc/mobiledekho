import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import { bikes } from '../../data/bikes'; // Mock data
import BikeForm from '../../components/BikeForm/BikeForm'; // Import BikeForm component

const AdminPanel = ({ user }) => {
  const [bikeList, setBikeList] = useState([]);
  const [editingBike, setEditingBike] = useState(null);

  useEffect(() => {
    setBikeList(bikes);
  }, []);

  const handleAddBike = (newBike) => {
    setBikeList([...bikeList, newBike]);
  };

  const handleEditBike = (updatedBike) => {
    setBikeList(bikeList.map(bike => (bike.id === updatedBike.id ? updatedBike : bike)));
    setEditingBike(null);
  };

  const handleDeleteBike = (id) => {
    setBikeList(bikeList.filter(bike => bike.id !== id));
  };

  if (!user || user.role !== 'admin') {
    return <div>Access Denied</div>;
  }

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <BikeForm onSubmit={editingBike ? handleEditBike : handleAddBike} bike={editingBike} />
      <div className="bike-list">
        {bikeList.map(bike => (
          <div key={bike.id} className="bike-item">
            <img src={bike.image} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button onClick={() => setEditingBike(bike)}>Edit</button>
            <button onClick={() => handleDeleteBike(bike.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
