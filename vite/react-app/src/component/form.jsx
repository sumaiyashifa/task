import React from 'react'
import  { useState } from 'react'; 
function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handle = (e) => {
      console.log(`Name: ${name}, Email: ${email}`);
      alert(`Form Submitted!\nName: ${name}\nEmail: ${email}`);
    };
  
    return (
      <div>
        <form onSubmit={handle}>
          <h2>Submit Form</h2>
          <div>
            <label>Full_Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default Form
