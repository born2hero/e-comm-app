import { Grid, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateAddress } from "../feature/checkout-slice";

export default function AddressForm() {
  const address = useSelector((state) => state.checkout?.address);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(updateAddress({ [name]: value }));
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <Box component="form" onChange={handleChange}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              autocomplete="given-name"
              id="firstName"
              name="firstName"
              label="First Name"
              variant="standard"
              defaultValue={address.firstName ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              autocomplete="family-name"
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="standard"
              defaultValue={address.lastName ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              autocomplete="shipping address-line1"
              id="address1"
              name="address1"
              label="Address Line 1"
              variant="standard"
              defaultValue={address.address1 ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              autocomplete="shipping address-line2"
              id="address2"
              name="address2"
              label="Address Line 2"
              variant="standard"
              defaultValue={address.address2 ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              autocomplete="city"
              id="city"
              name="city"
              label="City"
              variant="standard"
              defaultValue={address.city ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              autocomplete="state"
              id="state"
              name="state"
              label="State"
              variant="standard"
              defaultValue={address.state ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              autocomplete="country"
              id="country"
              name="country"
              label="Country"
              variant="standard"
              defaultValue={address.country ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              autocomplete="zipcode"
              id="zipcode"
              name="zipcode"
              label="Zip Code/Postal Code"
              variant="standard"
              defaultValue={address.zipcode ?? ""}
            ></TextField>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
