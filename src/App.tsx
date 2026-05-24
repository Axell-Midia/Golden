import Notas from "./components/Notas";
import Button from "./components/Button";
import "./App.css";
import Boton from "./components/Boton";
import Botone from "./components/Botone";
function App() {
  return (
    <>
      <Button
        color="primary"
        text="Click Me"
        onClick={() => console.log("Button!")}
      />
      <Notas />
      <Botone>test</Botone>
      <Boton>Hola</Boton>
      <Button
        color="secondary"
        text="Click Me"
        onClick={() => console.log("Button!")}
      />
    </>
  );
}

export default App;
