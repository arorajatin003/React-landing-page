
import './App.css';
import Header from './components/Header'
import Feature from './components/Feature'
import About from './components/About'
import Presentation from './components/Presentation'
import Contact from './components/Contact'
import aboutimage from './images/Frame 19.png'
import aboutimage1 from './images/download.png'

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} title="Comes With All You Need For Daily Life" button='Get app' />
      <Presentation />
      <About image={aboutimage1} title='Download The App Now' button='Download'/>
      <Contact />
    </div>
  );
}

export default App;
