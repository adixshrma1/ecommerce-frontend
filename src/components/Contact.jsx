import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-gray-600 text-center mb-4">
          We would love to hear from you! Please fill out the form or contact us
          directly
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg 
              py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg 
              py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={3}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg 
              py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 transition duration-300
           text-white py-2 rounded-lg cursor-pointer"
          >
            Submit
          </button>

          <div className="mt-8 text-center">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <div className="flex flex-col items-center space-y-2 mt-4 ">
                <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-blue-500 "/>
                    <span className="text-gray-600">+919988776655</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaEnvelope className="text-blue-500 "/>
                    <span className="text-gray-600">adixshrma@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaMapMarkedAlt className="text-blue-500 "/>
                    <span className="text-gray-600">Soni Appartment, MG Road, Delhi</span>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
