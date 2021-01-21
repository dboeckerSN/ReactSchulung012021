import React, { useState } from "react";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodoProps(inputText.title);
    setInputText({
      title: "",
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input 
        type="text"
        className="input-text"
        name="title"
        placeholder="Add Todo..." 
        value={inputText.title}
        onChange={onChange}/>
      
      <button className="input-submit">Submit</button>
    </form>
  );
}

export default InputTodo;