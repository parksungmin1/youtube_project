import React from "react";
import { Outlet } from "react-router-dom";
import Search from "./components/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import YoutubeApiProvider from "./contextApi/YoutubeApiContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <Search />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}
