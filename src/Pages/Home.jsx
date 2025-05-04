import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Sales from "../Components/Sales";
import Categories from "../Components/Categories";
import BestSelligProduct from "../Components/BestSelligProduct";
import MusicExperience from "../Components/MusicExperience";
import ExploreProducts from "../Components/ExploreProducts";
import Feature from "../Components/Feature";
import Services from "../Components/Services";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Sales />
      <Categories />
      <BestSelligProduct />
      <MusicExperience />
      <ExploreProducts />
      <Feature />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
