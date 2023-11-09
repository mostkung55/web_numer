import React, { useState } from "react";


function About() {
  const [name, setName] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <form>
        <input
          type="text"
          value={name}
          onChange={updateName}
          placeholder="Please enter your name"
        />
      </form>
    </div>
  );
};


export default About;