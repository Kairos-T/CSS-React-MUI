import React from "react";

// NavBar
import Navbar from "./Components/NavBar";

// MUI Components
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// GIF
import CatGif from "./Components/cat.gif";

function App() {
  return (
    <div>
      <Navbar />
      <center>
        <Container maxWidth="md">
          <Paper elevation={3} style={{ padding: "20px", margin: "20px 0" }}>
            {/* Use the Typography component with the appropriate fontFamily */}
            <Typography variant="h4" gutterBottom style={{ fontFamily: "'Fira Code', monospace" }}>
            &lt;/CSS Assignment:<br></br> Material UI in React&gt;
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              By: Kairos Tay, CSF02, S10258539F
            </Typography>
            <img
              src={CatGif}
              alt="Coding Cat GIF"
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
              }}
            />
            <Box m={2}>
              <Typography variant="body1">Features:</Typography>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                <li>
                  <Typography variant="body2">NavBar with menu</Typography>
                </li>
                <li>
                  <Typography variant="body2">Drawer for navigation</Typography>
                </li>
                <li>
                  <Typography variant="body2">MUI Icons</Typography>
                </li>
              </ul>
            </Box>
          </Paper>
        </Container>
      </center>

      {/* Footer */}
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: "20px", margin: "20px 0" }}>
          <Typography variant="body2" color="textSecondary">
            &copy; 2023 Kairos Tay
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default App;