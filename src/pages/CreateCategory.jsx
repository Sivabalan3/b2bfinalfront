import { useState,/*  useEffect */ } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';
import { Backend_url } from '../constant';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  // const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  // const fetchCategories = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/categories');
  //     setCategories(response.data);
  //   } catch (error) {
  //     console.error('Error fetching categories:', error);
  //     setMessage('Error fetching categories');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(`${Backend_url}/api/category`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage(response.data.message);
      setName('');
      setImage(null);
      // fetchCategories(); // Refresh the categories list after adding a new category
    } catch (error) {
      console.error('Error creating category:', error);
      setMessage('Error creating category');
    }
  };

  return (
    <>
      <NavBar name={"Create Category"} back={"home"} />
      <div className="max-w-3xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-400 mb-6">
          Create Category
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className=" relative -left-9999 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-400 text-white font-semibold rounded-md shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            Create Category
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm font-medium text-green-600">
            {message}
          </p>
        )}
        {/* <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories List</h3>
          <ul className="list-disc pl-5 space-y-4">
            {categories.map((cat) => (
              <li key={cat._id} className="flex items-center space-x-4">
                <p className="text-gray-700">{cat.name}</p>
                {cat.image && (
                  <img
                    src={`http://localhost:5000/api/image/${cat.image.split('/').pop()}`}
                    alt={cat.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                )}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default CreateCategory;
