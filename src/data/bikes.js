/* Images Importing */
import splender from '../assets/images/hero/hero-splender.jpeg';
import mt15 from '../assets/images/yamaha/yamaha_mt_15.jpeg';
import classic350 from '../assets/images/royal_enfield/classic_350.jpeg';
/* For Electric images */
import s1 from '../assets/images/electric/ola/s1pro.jpeg';
import iqube from '../assets/images/electric/tvs/iqube.jpeg';
import x450 from '../assets/images/electric/ather/450.jpeg';
import chetak from '../assets/images/electric/bajaj/chetak.jpeg';

export const bikes = [
  {
    id: 1,
    image: s1,
    name: 'Electric Bike 1',
    specifications: {
      engine: 'Electric',
      power: '15 HP',
      torque: '30 Nm',
      mileage: '100 km/charge',
      price: '$3000',
    },
    reviews: [
      { author: 'John Doe', content: 'Amazing electric bike with great mileage.' },
      { author: 'Jane Smith', content: 'Smooth and quiet ride.' },
    ],
    relatedBikes: [
      { image: iqube, name: 'Electric Bike 2' },
      { image: x450, name: 'Electric Bike 3' },
    ],
  },
  {
    id: 2,
    image: mt15,
    name: 'Latest Bike 1',
    specifications: {
      engine: '200cc',
      power: '20 HP',
      torque: '18 Nm',
      mileage: '35 kmpl',
      price: '$2000',
    },
    reviews: [
      { author: 'Alice', content: 'Perfect for long rides.' },
      { author: 'Bob', content: 'Strong and reliable.' },
    ],
    relatedBikes: [
      { image: s1, name: 'Electric Bike 1' },
      { image: classic350, name: 'Latest Bike 2' },
    ],
  },
  {
    id: 3,
    image: classic350,
    name: 'Test Ride Bike 1',
    specifications: {
      engine: '250cc',
      power: '25 HP',
      torque: '22 Nm',
      mileage: '30 kmpl',
      price: '$2500',
    },
    reviews: [
      { author: 'Chris', content: 'Great bike for test rides.' },
      { author: 'Dana', content: 'Very responsive and powerful.' },
    ],
    relatedBikes: [
      { image: s1, name: 'Electric Bike 1' },
      { image: mt15, name: 'Latest Bike 1' },
    ],
  },
  {
    id: 4,
    image: splender,
    name: 'Upcoming Bike 1',
    specifications: {
      engine: '300cc',
      power: '30 HP',
      torque: '25 Nm',
      mileage: '25 kmpl',
      price: '$3500',
    },
    reviews: [
      { author: 'Eve', content: 'Looking forward to this new model.' },
      { author: 'Frank', content: 'Impressive specs and design.' },
    ],
    relatedBikes: [
      { image: s1, name: 'Electric Bike 1' },
      { image: classic350, name: 'Test Ride Bike 1' },
    ],
  },
  {
    id: 5,
    image: x450,
    name: 'Comparison Bike 1',
    specifications: {
      engine: '350cc',
      power: '35 HP',
      torque: '28 Nm',
      mileage: '20 kmpl',
      price: '$4000',
    },
    reviews: [
      { author: 'Grace', content: 'Good for comparisons.' },
      { author: 'Hank', content: 'Balanced performance.' },
    ],
    relatedBikes: [
      { image: mt15, name: 'Latest Bike 1' },
      { image: splender, name: 'Upcoming Bike 1' },
    ],
  },
  {
    id: 6,
    image: chetak,
    name: 'Second Hand Bike 1',
    specifications: {
      engine: '150cc',
      power: '14 HP',
      torque: '13 Nm',
      mileage: '45 kmpl',
      price: '$1500',
    },
    reviews: [
      { author: 'Ivy', content: 'Great value for a second-hand bike.' },
      { author: 'Jack', content: 'Well maintained and affordable.' },
    ],
    relatedBikes: [
      { image: s1, name: 'Electric Bike 1' },
      { image: x450, name: 'Comparison Bike 1' },
    ],
  },
  {
    id: 7,
    image: iqube,
    name: 'Electric Bike 2',
    specifications: {
      engine: 'Electric',
      power: '20 HP',
      torque: '35 Nm',
      mileage: '120 km/charge',
      price: '$3200',
    },
    reviews: [
      { author: 'Kate', content: 'Superior electric bike with long range.' },
      { author: 'Leo', content: 'Efficient and eco-friendly.' },
    ],
    relatedBikes: [
      { image: s1, name: 'Electric Bike 1' },
      { image: classic350, name: 'Test Ride Bike 1' },
    ],
  },
  // Add more bikes as needed
];
