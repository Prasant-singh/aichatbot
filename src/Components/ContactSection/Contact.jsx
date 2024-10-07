import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First Name is required";
    if (!formData.lastName) formErrors.lastName = "Last Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phoneNumber) formErrors.phoneNumber = "Phone Number is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setResult("Sending....");
      setShowModal(true); // Show the modal on submit

      // Prepare the form data for submission to Web3 Forms
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "8915d6f9-c2f5-4066-a3f2-57a8c06bda31");
      formDataToSend.append("name", `${formData.firstName} ${formData.lastName}`);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("message", formData.message);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataToSend,
        });

        const data = await response.json();

        if (data.success) {
          setResult("Form Submitted Successfully");
          // Reset form data after successful submission
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: ""
          });
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setResult("There was an error submitting the form.");
      }

      // Close the modal after 3 seconds
      setTimeout(() => setShowModal(false), 3000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="landing_page">
      <div className="responsive-container-block big-container">
        <div className="responsive-container-block container">
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
            <div className="content-box">
              <p className="text-blk section-head">Get in Touch</p>
              <p className="text-blk section-subhead">
                We're dedicated to safeguarding the future of humanity through ethical and responsible AI development. If you share our vision or have any inquiries, we'd love to hear from you.
              </p>
              <div className="icons-container">
                <a className="share-icon" href="https://www.linkedin.com/company/anti-ai/">
                  <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png" alt="LinkedIn" />
                </a>
                <a className="share-icon">
                  <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" alt="Facebook" />
                </a>
                <a className="share-icon">
                  <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" alt="Google" />
                </a>
                <a className="share-icon" href="https://www.instagram.com/antiai.ltd/">
                  <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one" id="i1zj">
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="container-block form-wrapper">
                <p className="text-blk contactus-head">
                  Let's Connect
                </p>
                <p className="text-blk contactus-subhead">Our Team will get back to you shortly</p>
                <div className="responsive-container-block">
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-7">
                    <input
                      className="input"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i1ro7">
                    <input
                      className="input"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6 emial" id="ityct">
                    <input
                      className="input"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <input
                      className="input"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                    />
                    {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-7">
                    <textarea
                      className="textinput"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type message here"
                      required
                    />
                    {errors.message && <p className="error">{errors.message}</p>}
                  </div>
                </div>
                <button className="submit-btn" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <p>{result}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
