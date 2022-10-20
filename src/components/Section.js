import React from "react";
import styled from "styled-components"
import burger1 from "../images/burger/burger1.jpg";
import burger2 from "../images/burger/burger2.jpg";
import burger3 from "../images/burger/burger3.jpg";
import burger4 from "../images/burger/burger4.jpg";
import burger5 from "../images/burger/burger5.jpg";
import burger6 from "../images/burger/burger6.jpg";
import burger7 from "../images/burger/burger7.jpg";
import burger8 from "../images/burger/burger8.jpg";
import burger9 from "../images/burger/burger9.jpg";
import burger10 from "../images/burger/burger10.jpg";
import burger11 from "../images/burger/burger11.jpg";
import burger12 from "../images/burger/burger12.jpg";
import burger13 from "../images/burger/burger13.jpg";
import burger14 from "../images/burger/burger14.jpg";
import {Link} from "react-router-dom"
import {BiLeftArrowAlt} from "react-icons/bi"

const Section = () => {

    const ImageWrapper = styled.div`
        position: relative;
        width: 100vw;
        line-height: 0px;

        img{
            max-width: 100%;
        }
    `

    const ReturnButton = styled(Link)`
        position: fixed;
        height: 30px;
        width: 30px;
        border-radius: 20px;
        background: rgba(0,0,0,0.5);
        z-index: 10;
        top: 20px;
        left: 20px;
        font-size: 30px;

        svg{
            color: white;
        }
    `

  return (
    <>
    <ReturnButton to="/">
        <BiLeftArrowAlt />
    </ReturnButton>
    <ImageWrapper>
      <img src={burger1} alt="burger1"/>
      <img src={burger2} alt="burger2"/>
      <img src={burger3} alt="burger3"/>
      <img src={burger4} alt="burger4"/>
      <img src={burger5} alt="burger5"/>
      <img src={burger6} alt="burger6"/>
      <img src={burger7} alt="burger7"/>
      <img src={burger8} alt="burger8"/>
      <img src={burger9} alt="burger9"/>
      <img src={burger10} alt="burger10"/>
      <img src={burger11} alt="burger11"/>
      <img src={burger12} alt="burger12"/>
      <img src={burger13} alt="burger13"/>
      <img src={burger14} alt="burger14"/>
    </ImageWrapper>
    </>
  );
};

export default Section;
