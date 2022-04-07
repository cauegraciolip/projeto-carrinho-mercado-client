import { Button } from "./components/Button";
import { Texts } from "./components/Texts";
import { Input } from "./components/Input";
import { InputControl } from "./components/Input/InputControl";
import { FaEnvelope } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";


function App() {
  return (
    <>
      <Button variant="pattern">Botão</Button>
      <Texts as="h2" fonte="subtitle">Texto</Texts>
      <InputControl>
        <FaEnvelope />
        <Input placeholder="E-mail"/>
      </InputControl>
      <InputControl>
        <FaUserAlt />
        <Input placeholder="Usuário"/>
      </InputControl>
    </>
  )
}

export default App
