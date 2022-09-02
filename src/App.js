import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BudkaFooter from "./components/BudkaFooter";
import MyMain from "./components/MyMain";
import MyNav from "./components/MyNav";


function App() {
  return (
    <div>
      <MyNav />
      <MyMain />
      <BudkaFooter />
    </div >
  );
}

export default App;
