// import Form from "./Form";
import React from "react";
import '../src/App.css'

function App() {

  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isCheckbox: true,
      relationship: "",
      favColor: ""
    });

  // console.log(formData.favColor)


  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (


    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName} //it is done so that the react state drives the state of the input field rather than the input itself to avoid dual states

      />

      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />

      <input
        type="email"
        placeholder="E-mail"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

      <textarea
        value={formData.comments}
        name="comments"
        onChange={handleChange}
        placeholder="Comments"

      />

      <input
        type="checkbox"
        id="isCheckbox"
        checked={formData.isCheckbox}
        onChange={handleChange}
        name="isCheckbox"

      />
      <label htmlFor="isCheckbox">Agree to terms and condition?</label>

      <br />
      <br />

      <fieldset>
        <legend>Relationship status?</legend>
        <input
          type="radio"
          id="isSingle"
          name="relationship"
          value="Single"
          onChange={handleChange}
          checked={formData.relationship === "Single"}
        />
        <label htmlFor="isSigle">Single</label>
        <br />
        <br />
        <input
          type="radio"
          id="isCommitted"
          name="relationship"
          value="Committed"
          onChange={handleChange}
          checked={formData.relationship === "Committed"}
        />
        <label htmlFor="isCommitted">Committed</label>
        <br />
        <br />
        <input
          type="radio"
          id="isDivorced"
          name="relationship"
          value="Divorced"
          onChange={handleChange}
          checked={formData.relationship === "Divorced"}
        />
        <label htmlFor="isDivorced">Divorced</label>
        {/* <br /> */}
      </fieldset>

      <br />
      <br />

      <label htmlFor="favColor"> What is your fav color?</label>
      <br />
      <select id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">--Choose-- </option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="blue">Blue</option>
        <option value="blue">Blue</option>

      </select>
      <br />
      <br />

      <button>Submit</button>
    </form>




  );
}

export default App;
