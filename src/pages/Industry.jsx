import categories from "../components/data/CategoryList1";
import { View } from "../components/alt/View";
import { Text } from "../components/alt/Text";
import { Image } from "../components/alt/Image";
import { Button } from "../components/alt/Button";
import NavBar from "../components/Navbar";
import Swal from "sweetalert2";
import { useState } from "react";
import Modal from "react-modal";

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

const Industry = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [automaticGrade, setAutomaticGrade] = useState("");
  const [productCapacity, setProductCapacity] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "SUCCESSFULLY SUBMITTED",
      text: `Your request for ${quantity} units, ${automaticGrade} grade, and ${productCapacity} capacity has been sent.`,
      showConfirmButton: false,
      timer: 2500,
    });
    closeModal();
  }

  return (
    <>
      <NavBar name={"Industrial Plants"} back={"c1"} />
      <View className="p-6 mt-16">
        {/* Heading */}
        <Text className="text-2xl font-bold mb-6">Top Categories</Text>

        {/* Categories Grid */}
        <View className="space-y-6">
          {categories.map((category) => (
            <View  key={category.id}>
              <View className="bg-white mb-4 mt-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <View className="p-4 bg-gray-100 rounded-t-lg">
                  <Text className="text-xl font-semibold">{category.name}</Text>
                </View>
                <View className="flex p-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="w-28 h-54 object-cover rounded-lg mr-4"
                  />
                  <View className="flex flex-col justify-center">
                    <Text className="text-gray-500 text-sm">
                      {category.description}
                    </Text>
                    <Text className="text-gray-700 mt-2">
                      <span className="font-semibold">Price: </span>
                      {category.price}
                    </Text>
                    <Text className="text-gray-700 mt-1">
                      <span className="font-semibold">Machine Type: </span>
                      {category.machineType}
                    </Text>
                    <Text className="text-gray-700 mt-1">
                      <span className="font-semibold">Grade: </span>
                      {category.grade}
                    </Text>
                    <Text className="text-gray-700 mt-1">
                      <span className="font-semibold">Capacity: </span>
                      {category.capacity}
                    </Text>
                    <button
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      onClick={openModal}
                    >
                      Contact Supplier
                    </button>
                    <Text className="text-gray-500 mt-2">
                      Contact: {category.contact}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Contact Supplier Modal"
        >
          <p className="mb-1 text-gray-700 text-sm">
            Contact Seller by adding a few details of your requirements
          </p>

          <form className="space-y-2">
            {/* Quantity Input */}
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
                    onClick={() =>
                      setQuantity(quantity > 1 ? quantity - 1 : 1)
                    }
                    className="text-green-400 hover:text-green-800"
                  >
                    ▼
                  </button>
                </div>
              </div>
            </div>

            {/* Automatic Grade Input */}
            <div>
              <p className="block mb-1 font-medium text-gray-700">
                Automatic Grade:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <label className="p-2 border rounded-lg shadow-sm hover:shadow-lg transition flex items-center justify-between">
                  <span className="text-sm font-semibold">Automatic</span>
                  <input
                    type="radio"
                    name="automaticGrade"
                    value="Automatic"
                    checked={automaticGrade === "Automatic"}
                    onChange={(e) => setAutomaticGrade(e.target.value)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                </label>

                <label className="p-2 border rounded-lg shadow-sm hover:shadow-lg transition flex items-center justify-between">
                  <span className="text-sm font-semibold">Semi-Automatic</span>
                  <input
                    type="radio"
                    name="automaticGrade"
                    value="Semi-Automatic"
                    checked={automaticGrade === "Semi-Automatic"}
                    onChange={(e) => setAutomaticGrade(e.target.value)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                </label>
              </div>
            </div>

            {/* Product Capacity Input */}
            <div>
              <p className="block mb-1 font-medium text-gray-700">
                Product Capacity:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <label className="p-2 border rounded-lg shadow-sm hover:shadow-lg transition flex items-center justify-between">
                  <span className="text-sm font-semibold">50 Cups</span>
                  <input
                    type="radio"
                    name="productCapacity"
                    value="50 Cups"
                    checked={productCapacity === "50 Cups"}
                    onChange={(e) => setProductCapacity(e.target.value)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                </label>

                <label className="p-2 border rounded-lg shadow-sm hover:shadow-lg transition flex items-center justify-between">
                  <span className="text-sm font-semibold">90 Cups</span>
                  <input
                    type="radio"
                    name="productCapacity"
                    value="90 Cups"
                    checked={productCapacity === "90 Cups"}
                    onChange={(e) => setProductCapacity(e.target.value)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                </label>
              </div>
            </div>

            {/* Submit and Close Buttons */}
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

export default Industry;
