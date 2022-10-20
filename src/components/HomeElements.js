import styled from "styled-components";
import imagebackground from "../images/imagebackground.png";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  position: absolute;
  z-index: -10;
  height: 100vh;
  width: 100vw;
  background: black;
  text-align: center;
`;

export const HomeBackground = styled.div`
  position: absolute;
  z-index: -5;
  width: 100vw;
  height: 100vh;
  opacity: 0.1;
  background-image: url(${imagebackground});
  background-size: cover;
  background-position: center;
`;

export const HomeTitle = styled.h1`
  font-size: 5rem;
  color: #fecb37;
  text-transform: uppercase;
  margin-top: 120px;
`;

export const SectionsContainer = styled.div`
  margin: 20px 0px;
`;

export const LinkR = styled(Link)`
  text-decoration: none;

  h2 {
    color: white;
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 60px;
  }
`;
