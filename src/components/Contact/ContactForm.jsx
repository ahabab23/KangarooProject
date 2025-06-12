import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://kangaroobackend.onrender.com/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email_address: formData.email,
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-8 text-white relative sm:top-10 top-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-blue-100">
          Your email address will not be published. Required fields are marked
          <span className="text-white font-semibold"> *</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 bg-gray-200/30 placeholder-white placeholder-opacity-80 text-white focus:outline-none focus:ring-0 transition-all duration-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 bg-gray-200/30 placeholder-white placeholder-opacity-80 text-white focus:outline-none focus:ring-0 transition-all duration-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <textarea
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-4 bg-gray-200/30 placeholder-white placeholder-opacity-80 text-white focus:outline-none focus:ring-0 transition-all duration-500"
          />
        </div>

        {/* Submit Button and Status Message */}
        <div className="space-y-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-white text-black font-semibold px-8 py-3 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-500 transform hover:scale-105 active:scale-95 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </button>

          {submitStatus === "success" && (
            <p className="text-green-200 font-medium">
              Thank you! Your message has been sent successfully.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-200 font-medium">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
