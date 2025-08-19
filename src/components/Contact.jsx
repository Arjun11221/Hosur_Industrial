import { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image from "../assets/contactus.jpg";
import toast from "react-hot-toast";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_eipahaj";
    const templateId = "template_o22fk4p";
    const publicKey = "oFawTOzCEWCPzDSjl";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Arjun",
      message: formData.message,
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        toast.success("Message Sent Successfully");
      },
      (error) => {
        toast.error("Failed to send message.");
      }
    );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 md:mt-24 mt-40 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">GET IN TOUCH</h2>
            <p className="text-gray-600 mt-2">CONTACT US TO GET MORE INFO</p>
            <p className="text-gray-600 mt-1">
              We are happy to read from you anytime. Please use the form below
              to contact us.
            </p>
          </div>
          <div className="grid grid-cols-1 my-20  md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <img
                src={image}
                alt="Contact"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-16"
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactForm;
