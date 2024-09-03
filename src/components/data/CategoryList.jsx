// categories.js
import lw from '../../assets/photos/c1.jpg'
import wh from '../../assets/photos/c2.jpg'
import rice from '../../assets/photos/c3.jpg'
import bb from '../../assets/photos/c4.jpg'
import pm from '../../assets/photos/c5.jpg'
import sc from '../../assets/photos/c6.jpg'

const categories = [
    { 
      id: 1, 
      name: 'Industrial Plants Machinery & Equipment', 
      description: 'Explore a wide range of industrial machinery and equipment for your business needs.', 
      image: wh,
      link:"c1"
    },
    { 
      id: 2, 
      name: 'Consumer Electronics and Household Appliances', 
      description: 'Find the latest in consumer electronics and appliances for your home.', 
      image: pm,
      link:"c2"

    },
    { 
      id: 3, 
      name: 'Building and Construction Material', 
      description: 'Get top-quality building and construction materials at competitive prices.', 
      image: bb,
      link:"c3"

    },
    { 
      id: 4, 
      name: 'Clothing and Garments', 
      description: 'Discover the latest trends in clothing and garments for all occasions.', 
      image:rice,
      link:"c4"

    },
    { 
      id: 5, 
      name: 'Medical and Consultancy Services', 
      description: 'Connect with top medical and consultancy services to meet your healthcare needs.', 
      image:lw,
      link:"c5"

    },
    { 
      id: 6, 
      name: 'Medical and Ayurvedic', 
      description: 'Find traditional and modern medical and Ayurvedic products and services.', 
      image: sc,
      link:"c6"

    }
  ];
  
  export default categories;
  