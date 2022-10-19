import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Metodos from './components/Metodos';

function App() {
  return (
    <div className="App">
      <Metodos />
      <Saludo nombre="Alumno" edad="21"/>
    </div>
  );
}

export default App;
