import React from "react";
import { Avatar, Container } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  async function registerUser(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await signUp(data.get("email"), data.get("password"), data.get("name"));
    navigate("/login");
  }
  return (
    <Container component={"main"} maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "secondary.main",
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography component={"h1"} variant="h5">
          Sign Up
        </Typography>
        <Box component={"form"} sx={{ mt: 3 }} onSubmit={registerUser}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                fullWidth
                required
                name="name"
                id="name"
                autoFocus
                label="Name"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                fullWidth
                required
                type="email"
                name="email"
                id="email"
                label="Email"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="new-password"
                fullWidth
                required
                type="password"
                name="password"
                id="password"
                label="Password"
              ></TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <Link variant="body2" href="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
