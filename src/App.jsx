import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./App.css";
import { CounterProvider } from "./components/Context";

const App = () => {
  return (
    <CounterProvider>
      {/* <div className="body"> */}
        <Navbar />
        <Card />
      {/* </div> */}
    </CounterProvider>
  );
};

export default App;
