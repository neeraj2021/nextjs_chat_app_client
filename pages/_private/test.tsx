import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import axiosInstance from "../../axios";

function Test() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getAllUser = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/api/v1/user/all");

      setUser(data);
    } catch (e: any) {
      console.log(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <LoadingButton loading={loading} onClick={getAllUser}>
        Get All Users
      </LoadingButton>
      <pre>{JSON.stringify(user, null, 4)}</pre>
      <pre>{JSON.stringify(error, null, 4)}</pre>
    </div>
  );
}

export default Test;
