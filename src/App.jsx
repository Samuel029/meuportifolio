import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-container">
      <About />
      <Projects />
      <Contact />
      <footer className="footer">
        &copy; {new Date().getFullYear()} Samuel Augusto
      </footer>
    </div>
  );
}

export default App;
