import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Hero />
    </Container>
  );
}

export default App;
