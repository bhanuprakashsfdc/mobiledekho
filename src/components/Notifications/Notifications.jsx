import React, { useEffect, useState } from 'react';
import './Notifications.css';

const Notifications = ({ user }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch notifications from the backend
      const fetchNotifications = async () => {
        const response = await fetch(`https://api.example.com/users/${user.id}/notifications`);
        const data = await response.json();
        setNotifications(data);
      };
      fetchNotifications();
    }
  }, [user]);

  const markAsRead = async (notificationId) => {
    const response = await fetch(`https://api.example.com/notifications/${notificationId}/read`, {
      method: 'PUT',
    });
    if (response.ok) {
      setNotifications(notifications.map(notification => 
        notification.id === notificationId ? { ...notification, read: true } : notification
      ));
    }
  };

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification ${notification.read ? 'read' : 'unread'}`}
            onClick={() => markAsRead(notification.id)}
          >
            <p>{notification.message}</p>
            <small>{new Date(notification.date).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Notifications;
