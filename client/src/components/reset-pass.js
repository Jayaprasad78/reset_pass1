// src/PasswordChangeForm.js
import React, { useState } from "react";
import axios from "axios"; // Import Axios

const Resetpassword= () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
axios.defaults.withCredentials = true;
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the backend using Axios
    axios
      .post("https://reset-pass1-api.vercel.app", { email, newPassword })
      .then((response) => {
        // Handle the response from the API
        window.alert("password changed successfully");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2>Password Change</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleChangeEmail}
            required
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={handleChangePassword}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};




export default Resetpassword;
