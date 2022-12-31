import Head from "next/head";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Head>
        <title>Next Chat App</title>
      </Head>
      {children}
    </React.Fragment>
  );
};

export default Layout;
