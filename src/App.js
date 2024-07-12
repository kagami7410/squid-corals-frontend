import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (

    <>
      <div class='light x1'></div>
      <div class='light x2'></div>
      <div class='light x3'></div>
      <div class='light x4'></div>
      <div class='light x5'></div>
      <div class='light x6'></div>
      <div class='light x7'></div>
      <div class='light x8'></div>
      <div class='light x9'></div>
      <div className='main-page-container'>
        <NavBar />
        <LandingPage />

      </div>
    </>
  );
}

export default App;
