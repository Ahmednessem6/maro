import { useState, useEffect } from "react";
import axios from "axios";



const colors = {
  background: '#F1F8F3',
  button1: '#F5C243',
};

export function Form() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState({email:"",idQuestion:"",answer:""});
    const [postAnswers, setpostAnswers] = useState([]);


  useEffect(() => {
    setEmail(localStorage.getItem("emailUser"));
    axios.get("http://localhost:4000/api/v1/poll/getallPollTwo").then((response) => {
      setAllQuestions(response.data.poll)
     
    });
    
  }, []);
 

  const handleChange = async (e) => {
    e.preventDefault();
   
   
      setAnswer({
        email: email,
        idQuestion: e.target.name,
        answer: e.target.value,
      });
      setpostAnswers([...postAnswers,answer])
    
 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   
   
    try {
      const response = await axios.post("http://localhost:4000/api/v1/poll/AnserTwoUser", postAnswers.filter((e) => e.email !== ""));
      alert("Answers have benn submitted")
      console.log(response)
    } catch (error) {
      console.error('Error:', error);
    }
  };

 
  return (
    <form style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: colors.background,
      padding: "50px"
    }}
    onSubmit={handleSubmit}>
<table style={{border: "solid 2px red"}}>
  <thead style={{border: "solid 2px red"}}>
    <tr>
    <th>    question</th>

      <th>   acceptable</th>
      <th>   weak</th>
      <th>   good</th>
      <th>   excellent</th>
      
    </tr>
  </thead>
  <tbody style={{border: "solid 2px red"}}>
    {allQuestions.map((q, i) => (
      <tr style={{border: "solid 2px red"}}key={i}>
        <td>{q.text}</td>
        {["acceptable", "weak", "good", "excellent"].map((a) => (
          <td key={a} >
            <label style={{display: "block", margin: "10px 0"}}>
              <input
                type="radio"
                name={q._id}
                value={a}
                onChange={handleChange}
                style={{marginRight: "10px"}}
              />
            </label>
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>


      <input type="submit" value="Submit" style={{
        backgroundColor: colors.button1,
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        color: "black",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "20px"
      }}/>


    </form>
  );
};
