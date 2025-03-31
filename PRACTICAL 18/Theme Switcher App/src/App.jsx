// src/App.js
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;