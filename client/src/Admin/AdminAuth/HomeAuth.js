import { Link } from "react-router-dom";
//style of page
const colors = {
  background: "#EAEBF0",
  buttons: "#F48787",
  drawings: {
    primary: "#F5FBF8",
    secondary: "#FEFFFF",
    highlight: "#FFCC45"
  }
};

export default function HomeAuth() {
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
      <Link to="/SignUp">
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
          Sign Up
        </button>
      </Link>

      <Link to="/LoginAdmin">
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
          Login
        </button>
      </Link>

    
      
      
    </div>
  );
}

