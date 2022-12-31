import { LoadingButton } from "@mui/lab";
import { Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { ISignUpForm } from "../../interface";

function SignUp() {
  const [signupBody, setSignupBody] = useState<ISignUpForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignupBody({ ...signupBody, [name]: value });
  };

  const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
  };

  return (
    <Container className="flex flex-col gap-4 py-4">
      <div className=" flex flex-col gap-1">
        <p className="text-sm m-0 p-0 font-semibold tracking-wide">Name *</p>
        <TextField
          name="name"
          value={signupBody.name}
          onChange={handleChange}
          className="w-full"
          autoComplete="off"
          placeholder="Enter Your Name"
          type="text"
          size="small"
        />
      </div>

      <div className=" flex flex-col gap-1">
        <p className="text-sm m-0 p-0 font-semibold tracking-wide">
          Email Address *
        </p>
        <TextField
          name="email"
          value={signupBody.email}
          onChange={handleChange}
          className="w-full"
          autoComplete="off"
          placeholder="Enter Your Email Address"
          type="text"
          size="small"
        />
      </div>

      <div className=" flex flex-col gap-1">
        <p className="text-sm m-0 p-0 font-semibold tracking-wide">
          Password *
        </p>
        <TextField
          name="password"
          value={signupBody.password}
          onChange={handleChange}
          className="w-full"
          autoComplete="off"
          placeholder="Enter Password"
          type="password"
          size="small"
        />
      </div>

      <div className=" flex flex-col gap-1">
        <p className="text-sm m-0 p-0 font-semibold tracking-wide">
          Confirm Password *
        </p>
        <TextField
          name="confirmPassword"
          value={signupBody.confirmPassword}
          onChange={handleChange}
          className="w-full"
          autoComplete="off"
          placeholder="Confirm Password"
          type="password"
          size="small"
        />
      </div>

      <LoadingButton
        loading={loading}
        variant="contained"
        className="w-full"
        onClick={submitForm}
      >
        Sign Up
      </LoadingButton>
    </Container>
  );
}

export default SignUp;
