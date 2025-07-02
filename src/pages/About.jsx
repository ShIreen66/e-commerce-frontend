import { useState } from "react";

const About = () => {
  const [showContact, setShowContact] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // ✅ Here you can also send the form data to your backend in future if needed.

    setTimeout(() => {
      setShowContact(false);
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-indigo-100 via-white to-blue-100 py-12 px-2">
      <div className="bg-white/90 rounded-3xl shadow-2xl border border-indigo-100 max-w-3xl w-full p-10 flex flex-col items-center relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-30 animate-pulse"></div>

        <div className="mb-6 flex items-center justify-center relative z-10">
          <span className="text-5xl sm:text-6xl text-indigo-400 mr-3 drop-shadow-lg">🛒</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 text-center drop-shadow-md">
            About Our E-Commerce Store
          </h1>
        </div>

        <p className="text-base sm:text-lg text-gray-700 mb-8 text-center leading-relaxed max-w-2xl relative z-10">
          Welcome to <span className="font-bold text-indigo-500">our e-commerce platform</span>!  
          We are dedicated to providing the best online shopping experience with a wide range of products at competitive prices.  
          Our mission is to make shopping <span className="font-semibold text-blue-500">easy</span>, <span className="font-semibold text-blue-500">secure</span>, and <span className="font-semibold text-blue-500">enjoyable</span> for everyone.
        </p>

        <ul className="list-none flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 w-full max-w-xl relative z-10">
          <li className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-lg shadow-sm font-medium text-indigo-700 border border-indigo-100">
            🛍️ Wide selection of quality products
          </li>
          <li className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-lg shadow-sm font-medium text-indigo-700 border border-indigo-100">
            🚚 Fast & reliable shipping
          </li>
          <li className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-lg shadow-sm font-medium text-indigo-700 border border-indigo-100">
            🔒 Secure payment options
          </li>
          <li
            className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-lg shadow-sm font-medium text-indigo-700 border border-indigo-100 cursor-pointer hover:bg-indigo-100 transition"
            onClick={() => setShowContact(true)}
          >
            💬 24/7 customer support
          </li>
        </ul>

        <span className="text-xs text-gray-400 text-center block mt-4 relative z-10">
          &copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.
        </span>
      </div>

      {/* ✅ Contact Us Modal */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fadeIn">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-red-400 text-2xl"
              aria-label="Close Contact Form"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              ></textarea>
              <button
                type="submit"
                disabled={submitted}
                className={`${
                  submitted ? "bg-green-500 cursor-default" : "bg-indigo-500 hover:bg-indigo-600"
                } text-white font-semibold py-2 rounded-md transition-colors`}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
