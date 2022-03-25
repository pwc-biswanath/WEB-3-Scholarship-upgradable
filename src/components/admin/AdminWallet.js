import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StartScholarship from "../StartScholarship";
import { AdminSidebar } from "../common/AdminSidebar";
import { Grid } from "@mui/material";
import { Footer } from "../common/Footer";
const theme = createTheme();

export default function AdminWallet() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AdminSidebar name="" />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            py: 4,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
           <Grid container spacing={2}>
              <Grid item xl={12} lg={12} sm={12} xs={12}>
                <StartScholarship />
              </Grid>
            </Grid>
          </Container>
          <Footer/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
