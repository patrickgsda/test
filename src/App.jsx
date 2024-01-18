import { useState } from "react";
import { getCountries } from "./services/countries/countries.service.jsx";
import Card from "./components/CardList";
import { Container, ContainerItems } from "./styles/styles.js";

function App() {
  const [countries, setCountries] = useState([]);
  getCountries().then((res) => setCountries(res.data));

  return (
    <Container>
      {countries?.map((countrie) => {
        return (
          <ContainerItems key={countrie.common}>
            <Card key={countrie.name.common} countrie={countrie} />
          </ContainerItems>
        );
      })}
    </Container>
  );
}

export default App;
