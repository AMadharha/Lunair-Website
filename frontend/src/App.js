import './App.css';
import Nav from './components/Nav.js';
import Image from './components/Image.js';
import Discover from './components/Discover';
import Featured from './components/Featured';

function App() {
  return (
    <div>
      <Nav />
      <Image />
      <Discover />
      <Featured />
    </div>
  );
}

export default App;
