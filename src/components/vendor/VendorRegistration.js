import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import VendorForm from "./VendorForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { BlockChatinTransction } from "../../ABI-connect/connect";
import TransctionModal from "../shared/TransctionModal";
import { Footer } from "../common/Footer";
import Header from "../common/Header"
const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: "#f3f3f4",
    alignItems: "center",
    height: "100vh",
    overflow: "auto",
  },
}));
const theme = createTheme();
const VendorRegistration = () => {
  const classes = useStyles();

  const [start, setStart] = useState(false);
  const [response, setResponse] = useState(null);
  const submitForm = async (name, registrationNo, vendorAddress, pincode) => {
    setStart(true);
    const responseData = await BlockChatinTransction(
      "vendorRegistration",
      name,
      registrationNo,
      vendorAddress,
      pincode
    );
    setResponse(responseData);
  };

  return (
    <>

      <ThemeProvider theme={theme}>
    <Box className={classes.cardHolder}>
      {start && <TransctionModal response={response} />}
      <Header/>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
           <Grid container spacing={2}>
              <Grid item xl={4} lg={4} sm={12} xs={12}>
              </Grid>
              <Grid item xl={8} lg={8} sm={12} xs={12}>
                <VendorForm submitForm={submitForm} start={start} />
              </Grid>
            </Grid>
      </Container>

      {/* <div className={classes.cardHolder}> */}
        
     {/*  </div> */}
      <Footer/>
      </Box>
      </ThemeProvider>
    </>
  );
};
export default VendorRegistration;
