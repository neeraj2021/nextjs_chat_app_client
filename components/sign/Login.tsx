import { Container, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import { ILoginForm } from "../../interface";
import { getAxiosError } from "../../utils";
import axiosInstance from "../../axios";

function Login() {
  const [loginBody, setLoginBody] = useState<ILoginForm>({
    email: "",
    password: "",
  });
  const router = useRouter();

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

  const setGuest2Credential = () => {
    setLoginBody({
      email: "guest2@gmail.com",
      password: "1234",
    });
  };

  const submitForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axiosInstance.post(
        "/api/v1/user/login",
        loginBody
      );
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      router.push("/chatpage");
    } catch (err: any) {
      const error = getAxiosError(err);
      alert(error);
    } finally {
      setLoading(false);
    }

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
        variant="contained"
        className="w-full"
        onClick={submitForm}
      >
        Login
      </LoadingButton>

      <div className="flex flex-row gap-2">
        <Button
          variant="contained"
          className="w-full bg-red-500"
          onClick={setGuestCredential}
        >
          Set Guest User Credentials
        </Button>

        <Button
          variant="contained"
          className="w-full bg-green-800"
          onClick={setGuest2Credential}
        >
          Set Guest 2 User Credentials
        </Button>
      </div>
    </Container>
  );
}

export default Login;
