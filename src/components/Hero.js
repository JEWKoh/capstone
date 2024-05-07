import React from "react";
import Button from "./Button";
import Image from "../assets/restaurantchef.jpg";
import { useNavigate } from "react-router-dom";
import Pages from "../utils/Pages";
import "./Hero.scss";

function Hero() {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(Pages.get("reservations").path);
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p className="text">
            Nestled in the heart of bustling Chicago, Little Lemon is where
            modern flair meets cozy nostalgia. Our diverse, artisanal menu,
            featuring delectable bruschettas, succulent burgers, and refreshing
            Greek salads, is a testament to our belief that food is an art.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src={Image}
          alt="Restarurant food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;