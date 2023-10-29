import Title from "./components/Title";
import ButtonAdd from "./components/ButtonAdd";
import CardOpcao from "./components/CardOpcao";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Title>Menu</Title>
      <ButtonAdd>+</ButtonAdd>
      <div className="box-opcoes">
        <CardOpcao nameItem="Item" sourceImage="../../hamburguer.jpeg" />
        <CardOpcao nameItem="Item" sourceImage="../../hamburguer.jpeg" />
        <CardOpcao nameItem="Item" sourceImage="../../hamburguer.jpeg" />
        <CardOpcao nameItem="Item" sourceImage="../../hamburguer.jpeg" />
      </div>
    </div>
  );
}

export default App;
