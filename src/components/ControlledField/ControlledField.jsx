import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordOnChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password Must be 6 characters or longer");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //!  required use korle form er submit e prevent hoye jay
    console.log("submitted");
    //? submit er pore error dekhabe
    // if (password.length < 6) {
    //   setError("Password Must be 6 characters or longer");
    // } else {
    //   setError("");
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordOnChange}
          defaultValue={password} // ekhane sudhu value use korle ei field read only hoye jay
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>

      {/* Error jodi field related hoy tobe oi field er niche error dekhane hoy ar jodi total all error dei tobe ta form er niche dilei valo  */}
    </div>
  );
};

export default ControlledField;
