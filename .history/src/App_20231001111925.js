import { Navbar } from "./components/Navbar";

import './App.css'
import { Intro } from "./components/Intro";
import { Services } from "./components/Services";
import { Works } from "./components/Works";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Works />
      <Portfolio />
    </div>
  );
}

export default App;
