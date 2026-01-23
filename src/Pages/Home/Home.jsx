import React from "react";
import Hero from "../../Components/Banners/Hero";
import Books from "../../Components/Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
    const data = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Books data={data}></Books>
    </div>
  );
};

export default Home;
