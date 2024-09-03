// categories.js
import lw from '../../assets/photos/kk.jpg'
import wh from '../../assets/photos/ll.jpg'
import rice from '../../assets/photos/mach.jpg'
import bb from '../../assets/photos/paper.jpg'
import pm from '../../assets/photos/used.jpg'
import sc from '../../assets/photos/control.jpg'


const categories = [
    {
      id: 1,
      name: "Industrial Plants Machinery & Equipment",
      description: "High-quality machinery for industrial use.",
      image: lw,
      link: "c1",
      price: "$1000 - $5000",
      machineType: "Heavy Machinery",
      grade: "A",
      capacity: "5000 units/day",
      material: "Steel",
      contact: "+91-XXXXXXXXXX"
    },
    {
      id: 2,
      name: "Consumer Electronics and Household Appliances",
      description: "Latest electronics and appliances for your home.",
      image: wh,
      link: "c2",
      price: "$200 - $1500",
      machineType: "Electronics",
      grade: "B+",
      capacity: "200 units/day",
      material: "Plastic & Metal",
      contact: "+91-XXXXXXXXXX"
    },
    {
      id: 3,
      name: "Building and Construction Material",
      description: "Durable materials for construction.",
      image: rice,
      link: "c3",
      price: "$500 - $3000",
      machineType: "Construction",
      grade: "A+",
      capacity: "10000 tons/month",
      material: "Cement, Steel",
      contact: "+91-XXXXXXXXXX"
    },
    {
      id: 4,
      name: "Clothing and Garments",
      description: "Stylish clothing for all seasons.",
      image: bb,
      link: "c4",
      price: "$10 - $100",
      machineType: "Textile",
      grade: "A",
      capacity: "10000 units/day",
      material: "Cotton, Polyester",
      contact: "+91-XXXXXXXXXX"
    },
    {
      id: 5,
      name: "Medical and Consultancy Services",
      description: "Top-notch medical and consultancy services.",
      image: pm,
      link: "c5",
      price: "Varies",
      machineType: "Medical Equipment",
      grade: "A",
      capacity: "100 units/day",
      material: "Stainless Steel",
      contact: "+91-XXXXXXXXXX"
    },
    {
      id: 6,
      name: "Medical and Ayurvedic Products",
      description: "Natural and effective Ayurvedic products.",
      image: sc,
      link: "c6",
      price: "$20 - $200",
      machineType: "Herbal",
      grade: "B",
      capacity: "5000 units/day",
      material: "Herbs",
      contact: "+91-XXXXXXXXXX"
    },
  ];
  
  export default categories;
  