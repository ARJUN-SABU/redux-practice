import "./App.css";

//components
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/iceCream/IceCreamView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
