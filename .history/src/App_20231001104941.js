import { Navbar } from "./components/Navbar";

import './App.css'
import { Intro } from "./components/Intro";
import { Services } from "./components/Services";
import { Works } from "./components/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Works />
    </div>
  );
}

export default App;
