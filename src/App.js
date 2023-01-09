
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <Main />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
