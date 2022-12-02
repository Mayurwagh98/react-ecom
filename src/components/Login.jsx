import React, { useState } from "react";

let Login = () => {
  let [formData, setformData] = useState({
    fname: "",
    email: "",
    pass: "",
  });

  return (
    <>
      <h1 style={{ marginTop: "200px" }}>Login page</h1>
      <div>
        <input
          type="text"
          placeholder="enter your name"
          value={formData.fname}
          onChange={(e) => setformData(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter your email"
          value={formData.email}
          onChange={(e) => setformData(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          value={formData.pass}
          onChange={(e) => setformData(e.target.value)}
        />
      </div>
    </>
  );
};

export { Login };
