import React from "react";

const TermsAndConditions = ({ accepted, setAccepted }) => {
  return (
    <div className="terms-container">
      <h3>Terms and Conditions</h3>
      <div className="terms-content">
        {}
        <p>
        1.Acceptance of Terms
          By accessing or using the services provided by Anti-AI, you agree to comply with and be bound by these Terms and Conditions.
          
        2.Modification of Terms
          Anti-AI reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website.
          
        3.Service Use
          Anti-AI provides services aimed at promoting human-centric technology solutions. Users must use our services in a manner that is lawful and respectful of others.
          
        4.User Conduct
          Users must not use our services to engage in any activity that is harmful, offensive, or violates any laws. This includes but is not limited to the dissemination of harmful, misleading, or unlawful content.
          
        5.Intellectual Property
          All content provided by Anti-AI, including but not limited to text, graphics, logos, and software, is the property of Anti-AI and is protected by applicable intellectual property laws. Unauthorized use of our intellectual property is prohibited.
        
        6.Privacy Policy
          Anti-AI values your privacy. Our collection and use of personal information are governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference.
        </p>
      </div>
      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        I accept the terms and conditions
      </label>
    </div>
  );
};

export default TermsAndConditions;
