import Header from "./modules/header/index.jsx";
import Examples from "./modules/examples/index.jsx";
import Concepts from "./modules/concepts/index.jsx";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Concepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
