import { Container, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { ILoginForm } from "../../interface";

function Login() {
  const [loginBody, setLoginBody] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginBody({ ...loginBody, [name]: value });
  };

  const setGuestCredential = () => {
    setLoginBody({
      email: "guest@gmail.com",
      password: "12345678",
    });
  };

  const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);

    setLoading(false);
  };

  return (
    <Container className="flex flex-col gap-4 py-4">
      <div className=" flex flex-col gap-1">
        <p className="text-sm font-semibold tracking-wide">Email Address *</p>
        <TextField
          name="email"
          value={loginBody.email}
          onChange={handleChange}
          className="w-full"
          autoComplete="off"
          placeholder="Enter Your Email Address"
          type="email"
          size="small"
        />
      </div>

      <div className=" flex flex-col gap-1">
        <p className="text-sm font-semibold tracking-wide">Password *</p>
        <TextField
          name="password"
          value={loginBody.password}
          onChange={handleChange}
          className="w-full"
          autoComplete="off"
          placeholder="Enter Password"
          type="password"
          size="small"
        />
      </div>

      <LoadingButton
        loading={loading}
        loadingPosition="start"
        variant="contained"
        className="w-full"
        onClick={submitForm}
      >
        Login
      </LoadingButton>

      <Button
        variant="contained"
        className="w-full bg-red-500"
        onClick={setGuestCredential}
      >
        Get Guest User Credentials
      </Button>
    </Container>
  );
}

export default Login;
