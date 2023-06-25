import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Tech from "./components/Tech/Tech";
import Contact from "./components/Contact/Contact";
import Stars from "./components/Stars/Stars";
import Projects from "./components/Projects/Projects";
import { useState } from "react";

function App() {
  const [projectOpen, setProjectOpen] = useState(null);

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
        id="home"
        sx={{
          boxSizing: "border-box",
        }}
      >
        <div style={{ position: "relative" }}>
          <Navbar />
          <Stars />
          <Container maxWidth="xl" sx={{ boxSizing: "border-box" }}>
            <Hero />
            <About />
            <Tech />
            <Experience />
            <Projects projectOpen={projectOpen} setProjectOpen={setProjectOpen} />
            <Contact />
          </Container>
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 2,
              display: projectOpen ? "block" : "none",
            }}
            onClick={() => {
              setProjectOpen(null);
            }}
          ></div>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
