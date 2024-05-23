import React, { useState, useEffect } from 'react';
import './BikeForm.css';

const BikeForm = ({ onSubmit, bike }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [engine, setEngine] = useState('');
  const [power, setPower] = useState('');
  const [torque, setTorque] = useState('');
  const [mileage, setMileage] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (bike) {
      setName(bike.name);
      setDescription(bike.description);
      setImage(bike.image);
      setEngine(bike.specifications.engine);
      setPower(bike.specifications.power);
      setTorque(bike.specifications.torque);
      setMileage(bike.specifications.mileage);
      setPrice(bike.specifications.price);
    }
  }, [bike]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBike = {
      id: bike ? bike.id : Date.now(),
      name,
      description,
      image,
      specifications: {
        engine,
        power,
        torque,
        mileage,
        price,
      },
    };
    onSubmit(newBike);
    setName('');
    setDescription('');
    setImage('');
    setEngine('');
    setPower('');
    setTorque('');
    setMileage('');
    setPrice('');
  };

  return (
    <form className="bike-form" onSubmit={handleSubmit}>
      <h2>{bike ? 'Edit Bike' : 'Add Bike'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Engine"
        value={engine}
        onChange={(e) => setEngine(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Power"
        value={power}
        onChange={(e) => setPower(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Torque"
        value={torque}
        onChange={(e) => setTorque(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Mileage"
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">{bike ? 'Update Bike' : 'Add Bike'}</button>
    </form>
  );
};

export default BikeForm;
