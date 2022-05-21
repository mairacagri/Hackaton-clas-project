import React, {useState} from "react";

const Stories = () => {

  const [text, setText] = useState("");

  const handleUserText = (event) =>  {
    setText(event.target.value);
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)

    fetch("http://localhost:4000/api/v1/comments", {
      method: "POST",
      body: JSON.stringify({
        text: text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Comment"
        value={text}
        onChange={handleUserText}
      />
      <button>Submit</button>
    </form>
  );
 
}

export default Stories