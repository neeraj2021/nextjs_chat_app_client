import Head from "next/head";
import React from "react";

function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Next Chat App</title>
      </Head>
      {children}
    </>
  );
}

export default Layout;
