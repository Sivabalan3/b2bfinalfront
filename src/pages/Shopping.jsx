import { useParams } from "react-router-dom";
import products from "../components/data/ProductList"; // Adjust the path as needed
import NavBar from "../components/Navbar";
import { FaStar } from "react-icons/fa6";
import Modal from "react-modal";
import { useState } from "react";
import { Button } from "../components/alt/Button";
import { View } from "../components/alt/View";
import Swal from 'sweetalert2'
import Product from '../components/Products'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Shopping = () => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId));
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (!product) {
    return (
      <>
      <NavBar name={"Hello Sai"} back={"home"}/>
      <Product/>
      </>
    )
  }

  function handleSubmit() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "SUCCESSFULLY SUBMITTED",
      text: `Your request for ${product.name} from ${product.supplier} has been sent.`,
      showConfirmButton: false,
      timer: 2500,
    });
    closeModal();
  }

  return (
    <>
      <NavBar name={"Hello Sai"} back={"home"}/>
      <View className="p-6 mt-12">
        <p className="text-gray-600">Relevant Suppliers for you</p>
        <hr className="my-2" />
        <h2 className="text-xl font-bold mb-4">{product.name}</h2>

        <View className="flex flex-col md:flex-row items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-48 md:w-1/3 h-48 object-cover mb-2 md:mb-0 rounded-lg"
          />
          <View className="flex-1">
            <p className="text-gray-700 mb-1">{product.description}</p>
            <p className="text-lg font-semibold">{product.price}</p>
            <p className="underline">{product.supplier}</p>
            <p>
              4.5/5 <FaStar className="inline-block" /> (115){" "}
            </p>
            <Button
              className="px-4 w-full mt-2 py-2 bg-green-400 text-white rounded-lg hover:bg-green-600 transition duration-300"
              onClick={openModal}
              names={"Contact Supplier"}
            >
              Contact Supplier
            </Button>
          </View>
        </View>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Contact Supplier Modal"
        >
          <p className="mb-1 text-gray-700 text-sm">
            Contact Seller by adding a few details of your requirements
          </p>

          <form className="space-y-2">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Quantity:
              </label>
              <div className="relative flex items-center w-full">
                <input
                  type="number"
                  min="1"
                  readOnly
                  value={quantity}
                  contentEditable={false}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none text-center"
                />
                <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center pr-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-green-400 hover:text-green-800"
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    className="text-green-400 hover:text-green-800"
                  >
                    ▼
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p className="block mb-1 font-medium text-gray-700">
                Select Fabric:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <label className="p-2 border rounded-lg shadow-sm hover:shadow-lg transition flex items-center justify-between">
                  <span className="text-sm font-semibold">Cotton</span>
                  <input
                    type="radio"
                    name="fabric"
                    value="Cotton"
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                </label>

                <label className="p-2 border rounded-lg shadow-sm hover:shadow-lg transition flex items-center justify-between">
                  <span className="text-sm font-semibold">Silk</span>
                  <input
                    type="radio"
                    name="fabric"
                    value="Silk"
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                </label>

                <label className="p-2 border rounded-lg shadow-sm hover:shadow-lg transition flex items-center justify-between">
                  <span className="text-sm font-semibold">Wool</span>
                  <input
                    type="radio"
                    name="fabric"
                    value="Wool"
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                </label>

                <label className="p-2 border rounded-lg shadow-sm hover:shadow-lg transition flex items-center justify-between">
                  <span className="text-sm font-semibold">Rayon</span>
                  <input
                    type="radio"
                    name="fabric"
                    value="Rayon"
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                </label>
              </div>
            </div>

            <Button
              className="w-full py-1 bg-green-400 text-white rounded-lg hover:bg-green-600 transition duration-300"
              onClick={handleSubmit}
              names={"Submit"}
            >
              Submit Request
            </Button>
            <Button
              className="w-full py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-600 transition duration-300 mt-2"
              onClick={closeModal}
              names={"Close"}
            >
              Close
            </Button>
          </form>
        </Modal>
      </View>
    </>
  );
};
export default Shopping;
