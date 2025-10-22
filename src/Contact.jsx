// Contact.jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import "./App.css";

function Contact() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Phone: "",
      Message: ""
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .required("⚠️ Name is required")
        .matches(/[A-Z]{2,}/, "Name must have at least 2 uppercase letters"),
      Email: Yup.string()
        .email("⚠️ Invalid email format")
        .required("⚠️ Email is required")
        .matches(/@/, "Email must include @"),
      Phone: Yup.string()
        .required("⚠️ Phone is required")
        .matches(/^\+?\d{10,15}$/, "Enter valid phone"),
      Message: Yup.string()
        .required("⚠️ Message is required")
        .test(
          "min-lines",
          "Message must be at least 5 lines",
          value => value && value.split("\n").length >= 5
        )
    }),
    onSubmit: (values, { resetForm }) => {
      const saved = Cookies.get("contactData");
      let contactsArray = [];

      if (saved) {
        const parsed = JSON.parse(saved);
        contactsArray = Array.isArray(parsed) ? parsed : [parsed];
      }

      contactsArray.push(values);
      Cookies.set("contactData", JSON.stringify(contactsArray), { expires: 365 });
      resetForm();
      alert("✅ Thank you! We will get in touch with you soon.");
    }
  });

  const getValidationMessage = (field) => {
    return formik.touched[field] && formik.errors[field]
      ? <div className="error">{formik.errors[field]}</div>
      : formik.touched[field] && !formik.errors[field]
      ? <div className="success">✅</div>
      : null;
  }

  return (
    <div className="contact-page">
      <h2>📬 Contact Us</h2>
     <h1 style={{ maxWidth: "700px", margin: "20px auto", color: "#333" }}>
  Contact Us 🌿
</h1>

      <form onSubmit={formik.handleSubmit} className="contact-form">
        <label>Name:</label>
        <input
          type="text"
          name="Name"
          value={formik.values.Name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {getValidationMessage("Name")}

        <label>Email:</label>
        <input
          type="email"
          name="Email"
          value={formik.values.Email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {getValidationMessage("Email")}

        <label>Phone:</label>
        <input
          type="text"
          name="Phone"
          value={formik.values.Phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {getValidationMessage("Phone")}

        <label>Message:</label>
        <textarea
          name="Message"
          value={formik.values.Message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          rows={6}
        />
        {getValidationMessage("Message")}

        <button type="submit" className="contact-btn">Submit 🌱</button>
      </form>
    </div>
  );
}

export default Contact;
