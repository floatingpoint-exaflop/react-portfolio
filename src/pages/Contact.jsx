import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    contactName: "",
    email: "",
    msg: "",
  });
  const [formErrors, setFormErrors] = useState({
    contactName: "",
    email: "",
    msg: "",
  });

  const submitForm = (event) => {
    event.preventDefault();
    let errors = {};
    
    // Validate the form fields
    if (!formData.contactName.trim()) {
      errors.contactName = "Name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.msg.trim()) {
      errors.msg = "Message is required.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Construct the mailto link
    const subject = `Portfolio msg from ${formData.contactName}`;
    const body = `Sender Email: ${formData.email}\n\nMessage:\n${formData.msg}`;
    const mailtoLink = `mailto:timscallon1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() !== "") {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (value.trim() === "") {
      setFormErrors({ ...formErrors, [name]: `${name} is required.` });
    }
    if (name === "email" && value.trim() !== "" && !validateEmail(value)) {
      setFormErrors({
        ...formErrors,
        email: "Please enter a valid email address.",
      });
    }
  };

  return (
    <div className="card contactform p-4 shadow">
      <h2>Let's keep in touch.</h2>
      <form>
        <div className="row">
          <div className="col-md-3 mb-3">
            <label htmlFor="contactName" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              name="contactName"
              id="contactName"
              className={`form-control ${formErrors.contactName ? 'is-invalid' : ''}`}
              placeholder="Enter your name"
              value={formData.contactName}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {formErrors.contactName && (
              <div className="invalid-feedback">{formErrors.contactName}</div>
            )}
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {formErrors.email && (
              <div className="invalid-feedback">{formErrors.email}</div>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="msg" className="form-label">
            A Message For Me
          </label>
          <textarea
            name="msg"
            id="msg"
            className={`form-control ${formErrors.msg ? 'is-invalid' : ''}`}
            placeholder="Enter your message"
            rows="4"
            value={formData.msg}
            onChange={handleInputChange}
            onBlur={handleBlur}
          ></textarea>
          {formErrors.msg && (
            <div className="invalid-feedback">{formErrors.msg}</div>
          )}
        </div>

        <button type="button" className="btn btn-primary" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}
