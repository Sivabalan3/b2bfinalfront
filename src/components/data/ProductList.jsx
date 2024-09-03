import lw from '../../assets/photos/lw.jpg'
import wh from '../../assets/photos/wh.jpeg'
import rice from '../../assets/photos/rice.jpg'
import bb from '../../assets/photos/bb.jpg'
import pm from '../../assets/photos/pm.jpeg'
import sc from '../../assets/photos/sc.jpeg'

const products = [
  { 
    id: 1, 
    name: 'Ladies Wears', 
    description: 'Stylish and comfortable ladies wear, perfect for any occasion.', 
    price: '$3,099 -1 Piece', 
    image: lw ,
    supplier:'Dudani Retail (p) Ltd.'
  },
  { 
    id: 2, 
    name: 'Rice', 
    description: 'Premium quality rice, ideal for everyday cooking and special meals.', 
    price: '$149.99', 
    image: rice,
    supplier:'Dudani Retail (p) Ltd.'
  },
  { 
    id: 3, 
    name: 'Water Heater', 
    description: 'Efficient water heater and geyser, providing instant hot water.', 
    price: '$199.99', 
    image: wh,
    supplier:'Dudani Retail (p) Ltd.'
  },
  { 
    id: 4, 
    name: 'Printing Machine', 
    description: 'High-performance printing machine for all your business needs.', 
    price: '$249.99', 
    image: pm,
    supplier:'Dudani Retail (p) Ltd.'
  },
  { 
    id: 5, 
    name: 'Stethoscope', 
    description: 'Top-quality stethoscope, essential for medical professionals.', 
    price: '$299.99', 
    image: sc,
    supplier:'Dudani Retail (p) Ltd.'
  },
  { 
    id: 6, 
    name: 'Building Brick', 
    description: 'Durable building bricks, suitable for all types of construction projects.', 
    price: '$349.99', 
    image: bb,
    supplier:'Dudani Retail (p) Ltd.'
  },
  // Add more products as needed
];

export default products;
