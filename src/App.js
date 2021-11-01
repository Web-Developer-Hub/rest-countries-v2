import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Countries from "./component/Countries/Countries";

function App() {
  return (
    <div>
      <section>
        <div className="App">
          <div className="Manu">
            <img src={logo} className="App-logo" alt="logo" />
            <Navbar></Navbar>
          </div>
        </div>
      </section>
      
      <Countries></Countries>
     
    </div>
  );
}

export default App;
