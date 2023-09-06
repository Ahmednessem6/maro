import axios from "axios";
import { useState, useEffect } from "react";

export default function QuestionCreator() {
  // questions adding and rendering
  const [question, setQuestion] = useState("");
  const [allQuestions, setAllQuestions] = useState([]);

  // btn
  const [click, setClick] = useState(false);

  const handleAddingQuestion = (e) => {
    e.preventDefault();
    // post a question to api
    // note that the id of admin is saved in localstorage
    axios
      .post("http://localhost:4000/api/v1/poll/createPollTwo", {
        text: question,
        createdBy: localStorage.getItem("Idforadmin"),
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // fetching  allQuestion from api
    axios
      .get("http://localhost:4000/api/v1/poll/getallPollTwo")
      .then((res) => {
        console.log({res: res.data.poll})
        setAllQuestions(res.data.poll);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // create a url for form to user
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(`http://localhost:3000/${Math.random()}`);
    localStorage.setItem("FormUrl",url)
  }, []);

  useEffect(() => {
    console.log("s", allQuestions);
  }, [question]);

  // style of component
  const style = {
    container: {
      background: "#EAEBF0",
      padding: "20px",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    // style of adding question form
    Adding_Question_div: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    Adding_Question_Form: {
      display: "flex",
      gap: "15px",
      outline: "none",
    },
    Input_Of_Adding_Question: {
      width: "300px",
      border: "1px solid #CCC",
      borderRadius: "5px",
      padding: "10px",
    },
  };

  // handleDelete  function
  function handleDelete( idQuestion ) {
    axios
      .delete("http://localhost:4000/api/v1/poll/thedelete2", {
        data: {idQuestion: idQuestion},
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div className="Container" style={style.container}>
      <form
        className="AddQuestion"
        style={style.Adding_Question_Form}
        onSubmit={handleAddingQuestion}
      >
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={style.Input_Of_Adding_Question}
        />

        <button
          style={{
            backgroundColor: "#F5C243",
            color: "#FFF",
            width: "100px",
            height: "50px",
            borderRadius: "5px",
            border: "none",
          }}
          type="submit"
        >
          Add Question
        </button>

        <button
          className="Form'slink"
          style={{
            backgroundColor: "violet",
            border: "none",
            width: "90px",
            height: "50px",
          }}
          onClick={() => {
            setClick(!click);
          }}
        >
          Form's Link
        </button>

        {click ? alert(`the link of form is  ${url}`) : null}
      </form>

      <div>
        {allQuestions.map((question) => (
          <div style={{ display: "flex", gap: "40px" }}>
            <li
              style={{
                backgroundColor: "#DDE8A6",
                color: "gold",
                width: "300px",
                height: "50px",
                fontSize: "19px",
                fontWeight: "bolder",
                textAlign: "center",
                marginTop: "40px",
                color: "#62B145",
                listStyle: "none",
              }}
              key={question._id}
            >
              <h4> {question.text}</h4>
              <h4> {question._id}</h4>
            </li>
            <button
              style={{
                marginTop: "40px",

                backgroundColor: "#AA6464     ",
                border: "none",
                width: "90px",
                height: "50px",
                float: "right",
                color: "white",
              }}
              onClick={() => handleDelete(question._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
