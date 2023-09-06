import { Container } from 'react-bootstrap';
import './App.css';
import Connect from './Components/Connect/Connect';
import TheNavBar from './Components/TheNavBar/TheNavBar';
import Header from './Components/Header/Header';
import Research from './Components/Research/Research';
import Exchange from './Components/Exchange/Exchange';
import Footer from './Components/Footer/Footer';
import Featurers from './Components/Features/Features';
import Feedback from './Components/Feedback/Feedback';

const App = () => {
  return (
    <Container>
      <TheNavBar />
      <Header/>
      <Featurers/>
      <Research />
      <Connect />
      <Feedback />
      <Exchange />
      <Footer/>
    </Container>
  );
};

export default App;