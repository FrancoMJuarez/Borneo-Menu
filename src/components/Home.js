import React from "react";
import {
  HomeContainer,
  HomeBackground,
  HomeTitle,
  SectionsContainer,
  LinkR
} from "./HomeElements";

const Home = () => {
  const menuSections = [
    {
      name: "hamburguesas",
      id: 1,
    },
    {
      name: "para picar",
      id: 2,
    },
    {
      name: "sanguches",
      id: 3,
    },
    {
      name: "pizzas",
      id: 4,
    },
    {
      name: "ensaladas",
      id: 5,
    },
    {
      name: "dulces",
      id: 6,
    },
    {
      name: "bebidas",
      id: 7,
    },
    {
      name: "tragos",
      id: 8,
    },
  ];

  return (
    <HomeContainer>
      <HomeBackground />
      <HomeTitle>Menu digital</HomeTitle>
      <SectionsContainer>
        {menuSections.map((item) => (
          <LinkR to="1" key={item.id}>
            <h2>{item.name}</h2>
          </LinkR>
        ))}
      </SectionsContainer>
    </HomeContainer>
  );
};

export default Home;
