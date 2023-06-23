import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Tech from "./components/Tech/Tech";
import Contact from "./components/Contact/Contact";
import Stars from "./components/Stars/Stars";

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        xssm: 760,
        sm: 800,
        md: 1065,
        // mdlg:
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          boxSizing: "border-box",
        }}
      >
        <Navbar />
        <Container maxWidth="xl" sx={{ boxSizing: "border-box" }}>
          <Hero />
          <About />
          <Tech />
          <Experience />
        </Container>
        <div id="contact" style={{ position: "relative", paddingTop: "5rem" }}>
          <Contact />
          <Stars />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
