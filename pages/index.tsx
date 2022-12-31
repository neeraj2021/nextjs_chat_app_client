import { Container, Paper, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { FormType } from "../constants";

function Home() {
  const [value, setValue] = useState(0);

  return (
    <Container maxWidth="lg">
      <div className="flex flex-col gap-4 my-4">
        <Paper className="w-1/2 p-4 text-4xl font-light mx-auto rounded-md text-center">
          <span className="text-blue-600">Next Chat App</span>
        </Paper>

        <Paper className="w-1/2 p-4 text-4xl mx-auto rounded-md">
          <Tabs value={value} variant="fullWidth">
            <Tab label="Login" onClick={() => setValue(FormType.LOGIN)} />
            <Tab label="Sign Up" onClick={() => setValue(FormType.SIGNUP)} />
          </Tabs>
          {value === FormType.LOGIN && <Login />}
          {value === FormType.SIGNUP && <SignUp />}
        </Paper>
      </div>
    </Container>
  );
}

export default Home;
