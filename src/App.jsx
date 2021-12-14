//import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/Navbar';
import ThemeProvider from './Context/ThemeProvider';

function App() {
  return (
    <div id='fondo'>
    <h1>Comenzando</h1>
    <ThemeProvider>
    <Navbar/>
    </ThemeProvider>
    </div>
  );
}

export default App;
