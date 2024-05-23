import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ bikeId, bikeName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingDetails = { name, email, phone, date, time, bikeId, bikeName };
    const response = await fetch('https://api.example.com/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingDetails),
    });
    if (response.ok) {
      alert('Booking confirmed!');
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('');
    } else {
      alert('Failed to confirm booking. Please try again.');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book a Test Ride or Purchase</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Your Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
