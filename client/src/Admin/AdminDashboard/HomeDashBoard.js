import { Link } from "react-router-dom";
export default function HomeDash(){
    //style of page
    const colors={
        background: "#EAEBF0",
        buttons: "#F48787",
        drawings: {
          primary: "#F5FBF8",
          secondary: "#FEFFFF",
          highlight: "#FFCC45"
        }
    }
      
    return (
        <div
          style={{
            display: "flex",
            gap: "100px",
            backgroundColor: colors.background,
            height: "100vh",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Link to="/Dashboard">
            <button
              style={{
                width: "300px",
                height: "100px",
                backgroundColor: colors.buttons,
                borderRadius: "20px",
                color: "white",
                fontSize: "33px",
                border: "none",
                cursor: "pointer"
              }}
            >
           Dashboard
            </button>
          </Link>
    
          <Link to="/Equations_table">
            <button
              style={{
                width: "300px",
                height: "100px",
                backgroundColor: "#F4C443",
                borderRadius: "20px",
                color: "white",
                fontSize: "33px",
                border: "none",
                cursor: "pointer"
              }}
            >
          Equations Table
            </button>
          </Link>
    
          <Link to="/pie-chart">
            <button
              style={{
                width: "300px",
                height: "100px",
                backgroundColor: "#F4C443",
                borderRadius: "20px",
                color: "white",
                fontSize: "33px",
                border: "none",
                cursor: "pointer"
              }}
            >
     pie chart
            </button>
          </Link>
          
          
        </div>
      );


            }