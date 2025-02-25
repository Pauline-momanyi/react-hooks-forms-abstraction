import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: true
  });
  

  function handleChange(event) {
    let value = event.target.value
    if(event.target.type === "checkbox"){
      value = event.target.checked
    }
    setFormData({...formData, [event.target.name]: value});
  }
  console.log(formData);

  

  return (
    <form>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
