import React from "react";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Stepper } from "@mui/material";
import { Step } from "@mui/material";
import { StepLabel } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import ReviewForm from "../components/ReviewForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCheckoutInformation } from "../feature/checkout-slice";
import { clearCart } from "../feature/cart-slice";
import { Link } from "react-router-dom";

const steps = ["Shipping Address", "Payment Details", "Review Order"];

function getStepContent(activeStep) {
  switch (activeStep) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <ReviewForm />;
    default:
      throw new Error("Unknown Step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (activeStep === steps.length) {
      dispatch(clearCart());
      dispatch(clearCheckoutInformation());
    }
  }, [activeStep]);
  function handleNext() {
    setActiveStep(activeStep + 1);
  }
  function handleBack() {
    setActiveStep(activeStep - 1);
  }
  return (
    <Container
      component="section"
      maxWidth="lg"
      sx={{
        mb: 4,
      }}
    >
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper
          activeStep={activeStep}
          sx={{
            pt: 3,
            pb: 5,
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thankyou for your order
            </Typography>
            <Typography>
              Your order number is #122345. We have emailed you the details
              regarding your order confirmation.
            </Typography>
            <Link to="/">Shop More</Link>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button
                  sx={{ mt: 3, ml: 1 }}
                  variant="contained"
                  onClick={handleBack}
                >
                  Back
                </Button>
              )}
              <Button
                sx={{ mt: 3, ml: 1 }}
                variant="contained"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Place Order" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
}
