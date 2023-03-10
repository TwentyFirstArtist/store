import Conteiner from "./components/content/Conteiner";
import Header from "./components/Header";
import Nav from "./components/Nav";


function App() {

  return (
    <div className={"App bg-orange-50"}>
      <Header />
      <Nav />
      <Conteiner />
    </div>
  );
}

export default App;
