
import './App.css';
import Navbar from'./components/Navbar/Navbar';
import Contenedor from'./components/Contenedor/Contenedor';
import Articles from './components/Article/Article';
import Redes from './components/Redes/Redes';
import Enlaces from './components/Enlaces/Enlaces';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Contenedor/>
      <Articles/>
      <Redes/>
      <Enlaces/> 
    </div>
  );
}

export default App;
