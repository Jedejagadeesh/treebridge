import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import "./App.css";

function Contact() {
  const [allContacts, setAllContacts] = useState([]);

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
        .matches(/^[A-Z][a-zA-Z\s]*$/, "First letter must be capital"),
      Email: Yup.string()
        .email("⚠️ Invalid email format")
        .required("⚠️ Email is required"),
      Phone: Yup.string()
        .required("⚠️ Phone is required")
        .matches(/^\+?\d{10,15}$/, "Enter valid phone"),
      Message: Yup.string()
        .min(5, "⚠️ Message too short")
        .required("⚠️ Enter a message")
    }),
    onSubmit: (values) => {
      // Load previous entries
      const saved = Cookies.get("contactData");
      let contactsArray = [];

      if (saved) {
        const parsed = JSON.parse(saved);
        contactsArray = Array.isArray(parsed) ? parsed : [parsed];
      }

      // Add new entry
      contactsArray.push(values);

      // Save updated array to cookie (expires in 365 days)
      Cookies.set("contactData", JSON.stringify(contactsArray), { expires: 365 });
      setAllContacts(contactsArray); // update state
      formik.resetForm();
      alert("✅ Your details saved permanently!");
    }
  });

  // Load all contacts from cookie on mount
  useEffect(() => {
    const saved = Cookies.get("contactData");
    let contactsArray = [];

    if (saved) {
      const parsed = JSON.parse(saved);
      contactsArray = Array.isArray(parsed) ? parsed : [parsed];
    }

    setAllContacts(contactsArray);
  }, []);

  return (
    <div className="contact-page">
      <h2>📬 Contact Us</h2>
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <label>Name:</label>
        <input
          type="text"
          name="Name"
          value={formik.values.Name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Name && formik.errors.Name && <div className="error">{formik.errors.Name}</div>}

        <label>Email:</label>
        <input
          type="email"
          name="Email"
          value={formik.values.Email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Email && formik.errors.Email && <div className="error">{formik.errors.Email}</div>}

        <label>Phone:</label>
        <input
          type="text"
          name="Phone"
          value={formik.values.Phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Phone && formik.errors.Phone && <div className="error">{formik.errors.Phone}</div>}

        <label>Message:</label>
        <textarea
          name="Message"
          value={formik.values.Message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Message && formik.errors.Message && <div className="error">{formik.errors.Message}</div>}

        <button type="submit">Submit 🌱</button>
      </form>

      <div className="all-contacts">
        <h3>All Submitted Contacts:</h3>
        {allContacts.length === 0 && <p>No contacts yet.</p>}
        {allContacts.map((c, i) => (
          <div key={i} className="contact-card">
            <p><b>Name:</b> {c.Name}</p>
            <p><b>Email:</b> {c.Email}</p>
            <p><b>Phone:</b> {c.Phone}</p>
            <p><b>Message:</b> {c.Message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
