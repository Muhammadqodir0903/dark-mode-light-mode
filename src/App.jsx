
import { useContext } from 'react';
import './App.css';
import { Context } from './Context/Context';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  // const {mode} = useContext(Context)
  return (
    <div className="App">
      
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
