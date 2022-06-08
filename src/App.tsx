import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import { toasterConfig } from "./lib/helpers/config";
import { TokenExpire } from "./components/shared/TokenExpire/TokenExpire";
import AppContextProviders from "./lib/context/AppContextProviders";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer {...toasterConfig} position="top-center" />
        <AppContextProviders>
          <Layout>
            <Routes />
            <TokenExpire />
          </Layout>
        </AppContextProviders>

        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
