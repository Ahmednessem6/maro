import { Link } from "react-router-dom";

 export default function  Home () {
  // style of page
  const styles = {
    container: {
      background: '#EAEBF0',
      padding: '20px',
    },
    header: {
      color: '#F48787',
      fontSize: '24px',
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    button: {
      color: '#F5FBF8',
      width: '100px',
      height: '50px',
    },
  };
  
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Select Admin or User</h1>
        <div style={styles.flexContainer}>
          <Link to="/UserLogin">
            <button style={styles.button}>User</button>
          </Link>
          <Link to="/Admin">
            <button style={styles.button}>Admin</button>
          </Link>
        </div>
      </div>
    );
  };
  


  