import React, { useState, useEffect } from "react";
import { Alert, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import "./Career.css";

const generateCaptcha = () => {
  const operations = [
    { symbol: "+", method: (a, b) => a + b },
    { symbol: "x", method: (a, b) => a * b },
  ];
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const operation = operations[Math.floor(Math.random() * operations.length)];

  return {
    question: `${a} ${operation.symbol} ${b}`,
    answer: operation.method(a, b).toString(),
  };
};

export default function Career() {
  const { state } = useLocation();
  const { role } = state || {}; // Prefilled role from the job list
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const onSubmit = async (data) => {
    if (captchaInput !== captcha.answer) {
      alert("Incorrect CAPTCHA answer. Please try again.");
      setCaptcha(generateCaptcha());
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("Resume", data.Resume[0]);
    formData.append("name", data["First name"]);
    formData.append("email", data.Email);
    formData.append("contact_no", data["Mobile number"]);
    formData.append("current_location", data["Current Location"]);
    formData.append("role", role || data.Role);

    try {
      const response = await fetch(
        "https://anti-backend-1isb.onrender.com/applyJobProfile",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setSuccessMessage("Form submitted successfully!");
        reset(); // Clear the form data
        setCaptcha(generateCaptcha()); // Generate new captcha
      } else {
        console.error("Error sending data");
      }
    } catch (error) {
      console.error("Error uploading file or sending data", error);
    }

    setLoading(false);
  };

  return (
    <div className="containerty">
      <div className="text-containerty">
        <h1>Open Positions</h1>
        <p>
          We at Anti AI are seeking inquisitive minds from diverse disciplines and backgrounds. If you have a thirst for knowledge and a unique perspective, you are an ideal candidate. Join us in our mission.
        </p>
        <ul>
          <li>You are Passionate about technology and its impact on society.</li>
          <li>You have Strong problem-solving skills and ability to think creatively.</li>
          <li>You are Not bound by any technical stack.</li>
          <li>You Believe hacking is a beautiful art.</li>
          <li>You Are a nerd.</li>
          <li>You are Familiar with either Machine learning/Artificial Intelligence or Full Stack Web Development.</li>
          <li>You love solving challenges and problems.</li>
        </ul>
      </div>
      <div className="form-containerty">
        <Spin
          spinning={loading}
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="career-form">
            <p className="mandatory-message">* All fields are mandatory</p>
            <input
              type="name"
              placeholder="First name"
              className={errors["First name"] ? "error-input" : ""}
              {...register("First name", { required: true, maxLength: 80 })}
            />
            {errors["First name"] && <span className="error-text">This field is required</span>}

            <input
              type="email"
              placeholder="Email"
              className={errors.Email ? "error-input" : ""}
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email && <span className="error-text">This field is required</span>}

            <input
              type="tel"
              placeholder="Mobile number"
              className={errors["Mobile number"] ? "error-input" : ""}
              {...register("Mobile number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors["Mobile number"] && <span className="error-text">This field is required</span>}

            <input
              type="file"
              placeholder="Upload Resume"
              className={errors.Resume ? "error-input" : ""}
              {...register("Resume", { required: true })}
            />
            {errors.Resume && <span className="error-text">This field is required</span>}

            <input
              type="name"
              placeholder="Current Location"
              className={errors["Current Location"] ? "error-input" : ""}
              {...register("Current Location", { required: true })}
            />
            {errors["Current Location"] && <span className="error-text">This field is required</span>}

            {role ? (
              <input
                type="text"
                value={role}
                disabled
                className="disabled-input"
              />
            ) : (
              <select
                className={errors.Role ? "error-input" : ""}
                {...register("Role", { required: true })}
              >
                <option value="">Select Role...</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="AI/ML Developer">AI/ML Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Digital Marketing">Digital Marketing/Social Media</option>
                <option value="Finance/Accounting">Finance/Accounting</option>
                <option value="Content Creation">Content Creation</option>
              </select>
            )}
            {errors.Role && <span className="error-text">This field is required</span>}

            <div className="captcha-container">
              <label>What is {captcha.question}?</label>
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Enter the answer"
                className={errors.Captcha ? "error-input" : ""}
              />
            </div>

            <label>
              <input
                type="checkbox"
                className={errors.Terms ? "error-input" : ""}
                {...register("Terms", { required: true })}
              />
              I accept the terms and conditions
            </label>
            {errors.Terms && <span className="error-text">This field is required</span>}

            <input type="submit" />
            {successMessage && (
              <Alert
                message="Your Application is Submitted Successfully."
                description="Our team members will contact you soon."
                type="success"
                showIcon
              />
            )}
          </form>
        </Spin>
      </div>
    </div>
  );
}
