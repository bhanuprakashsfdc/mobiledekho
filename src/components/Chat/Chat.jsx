import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    if (user) {
      // Connect to WebSocket server
      ws.current = new WebSocket('wss://example.com/chat');

      ws.current.onopen = () => {
        console.log('Connected to chat server');
      };

      ws.current.onmessage = (event) => {
        const message = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, message]);
      };

      ws.current.onclose = () => {
        console.log('Disconnected from chat server');
      };

      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      return () => {
        ws.current.close();
      };
    }
  }, [user]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = { user: user.username, content: newMessage, timestamp: new Date() };
      ws.current.send(JSON.stringify(message));
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat">
      <h2>Chat Support</h2>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.user === user.username ? 'own' : ''}`}>
            <strong>{message.user}</strong>: {message.content}
            <small>{new Date(message.timestamp).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
