import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </Container>
  );
}

export default App;
