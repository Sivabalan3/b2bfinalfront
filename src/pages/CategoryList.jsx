import { useState, useEffect } from 'react';
import axios from 'axios';
import {Categories} from './Categories';

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setMessage('Error fetching categories');
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-green-400 mb-6">Categories</h2>
      {message && (
        <p className="mt-4 text-center text-sm font-medium text-red-600">
          {message}
        </p>
      )}
      <Categories categories={categories} /> 
    </div>
  );
};

