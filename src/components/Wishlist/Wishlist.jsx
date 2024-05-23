import React, { useEffect, useState } from 'react';
import './Wishlist.css';

const Wishlist = ({ user }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch wishlist from the backend
      const fetchWishlist = async () => {
        const response = await fetch(`https://api.example.com/users/${user.id}/wishlist`);
        const data = await response.json();
        setWishlist(data);
      };
      fetchWishlist();
    }
  }, [user]);

  const removeFromWishlist = async (bikeId) => {
    const response = await fetch(`https://api.example.com/users/${user.id}/wishlist/${bikeId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setWishlist(wishlist.filter((bike) => bike.id !== bikeId));
    }
  };

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No bikes in wishlist</p>
      ) : (
        wishlist.map((bike) => (
          <div key={bike.id} className="wishlist-item">
            <img src={bike.image} alt={bike.name} />
            <h3>{bike.name}</h3>
            <button onClick={() => removeFromWishlist(bike.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
