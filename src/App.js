import "./App.css";

//components
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/iceCream/IceCreamView";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <CakeView />
      <IceCreamView />
    </div>
  );
}

export default App;
