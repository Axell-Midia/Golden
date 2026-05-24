import Notas from "./components/Notas";
import Button from "./components/Button";
import "./App.css";
import Boton from "./components/Boton";

function App() {
  return (
    <>
      <Button
        color="primary"
        text="Click Me"
        onClick={() => console.log("Button!")}
      />
      <Notas />

      <Boton text="Hola"></Boton>
      <Button
        color="secondary"
        text="Click Me"
        onClick={() => console.log("Button!")}
      />
    </>
  );
}

export default App;
