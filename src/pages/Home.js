import { Container, CircularProgress } from "@mui/material";
import React, { useTransition } from "react";
import Cards from "../components/Cards/Cards";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";

const Home = () => {
  const [isPending, startTransition] = useTransition({
    timeoutMs: 5000,
  });

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <SearchForm startTransition={startTransition} />
        {isPending ? <CircularProgress /> : <Cards />}
      </Container>
    </>
  );
};

export default Home;
