import "../styles/globals.css";
import { CacheProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import type { AppProps } from "next/app";
import Layout from "../constants/layout/Layout";

const cache = createCache({
  key: "css",
  prepend: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cache}>
        <Layout>
          {/* eslint-disable react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
    </StyledEngineProvider>
  );
}
