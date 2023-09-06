import { useEffect,useState,useRef } from "react";
import axios from "axios";
import { Pie } from 'react-chartjs-2';
import "./EqTable.css"
const EquationsTable = () => {
  
  const [data, setData] = useState([]);// data of answers and equations
  const [votes, setVotes] = useState([]);//votes of chart js

const[labels,setLabels]=useState(["acceptable", "weak", "good"])// labels of chart js
const apiUrl = "http://localhost:4000/api/v1/poll/tabollPollTwo";

 async function getAllEquations__Allanswers() {
  try {
    const response = await axios.get(apiUrl);
   setData(response.data.data);
    // Process the received data or update the component state
  } catch (error) {
    console.error(error);
    // Handle any error that occurred during the request
  }
}
useEffect(() => {
 
   getAllEquations__Allanswers()
calculateWeakSum(data)
console.log("h")
}
  

 
   


, [data]
)



  

//function to calaculate number of answers


const calculateWeakSum = (data) => {

const weak=data.map((e)=>(e.weak))
const good=data.map((e)=>(e.good))
const excellent=data.map((e)=>(e.excellent))
const acceptable=data.map((e)=>(e.acceptable))
var  sumWeak,sumAccept,sumExcellent,sumGood=0
 for(let i =0;i<acceptable.length;i++){
  sumWeak+=weak[i] //calc number of answers of weak
  sumAccept+=acceptable[i]
  sumGood+=good[i]
  sumExcellent+=weak[i]
 }

}



  


  return (
    <>
      <table className="admin-table">
        <thead>
          <tr>
            {["acceptable", "weak", "good", "excellent"].map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((item, index) => (
              <tr key={index} style={{border:"1px solid yellow"}}>
                <td>{item.acceptable}</td>
                <td>{item.weak}</td>

                <td>{item.good}</td>

                <td>{item.excellent}</td>
                <td>{item.average}</td>
                <td>{item.rate}</td>
                <td>{item.t_test}</td>
            
              </tr>
            ))}
        </tbody>
      </table>
    
                </>
  );
};

export default EquationsTable