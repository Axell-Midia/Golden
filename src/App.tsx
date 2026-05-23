import Notas from "./components/Notas";
import Button from "./components/Button";
import "./App.css";
function App() {
  return (
    <>
      <Button
        color="primary"
        text="Click Me"
        onClick={() => console.log("Button!")}
      />
      <Notas />
      <button className="bg-blue-500 text-white">TEST</button>
      <h1 className="text-4xl font-bold text-blue-500">Tailwind funciona</h1>
      <Button
        color="secondary"
        text="Click Me"
        onClick={() => console.log("Button!")}
      />
    </>
  );
}

export default App;
