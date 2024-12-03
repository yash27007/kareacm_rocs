import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Timeline from './components/Timeline';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Speakers />
      <Timeline />
      <Sponsors/>
      <Footer />
    </div>
  );
}

export default App;