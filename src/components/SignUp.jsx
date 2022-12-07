import React, { useState } from "react";

let Signup = () => {
  let [formData, setformData] = useState({
    fname: "",
    email: "",
    pass: "",
  });

  let handleForm = (event) => {
    let { name, value } = event.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  let submitForm = (event) => {
    event.preventDefault();
    let localData = JSON.parse(localStorage.getItem("Formdata")) || [];
    let flag = false;
    for (let x of localData) {
      if (x.email === formData.email) {
        flag = true;
      }
    }
    if (flag) {
      alert(`User already exists`);
    } else {
      localData.push(formData);
      console.log(formData);
      localStorage.setItem("Formdata", JSON.stringify(localData));
      alert(`Registration Successfull!`);
      setformData({ fname: "", email: "", pass: "" });
    }
  };

  return (
    <>
      <h1>This</h1>
      <div style={{ marinTop: "400px" }}>
        <form onSubmit={submitForm}>
          <input
            type="text"
            value={formData.fname}
            required={true}
            name="fname"
            onChange={handleForm}
            placeholder="Enter name"
          />
          <input
            type="text"
            value={formData.email}
            required={true}
            name="email"
            onChange={handleForm}
            placeholder="Enter email"
          />
          <input
            type="password"
            value={formData.pass}
            required={true}
            name="pass"
            onChange={handleForm}
            placeholder="Enter password"
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export { Signup };
