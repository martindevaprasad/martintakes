import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

export const Header = () => {
  return (
    <>
      <AppBar
        sx={{
          background: "#252525"
        }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              style={{ fontSize: "30px", fontFamily: "Purplepurse" }}
              className="logo"
            >
              Martin-Develops
            </Typography>

          
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
