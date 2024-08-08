import React from "react"
import { Text } from '../containers/language';
import styled from "styled-components"
import BG from '../images/Header/bg.png'

const ContainerHeader = styled.div`
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  height: 100vh;
  margin: 0px;
`

const TextHeader = styled.h1`
  height: auto;
  font-size: 3rem;
  color: #130C30;
  margin: auto;
  text-align: center;

  @media (max-width: 425px) and (min-width: 320px)  {
    font-size: 1.5rem;
    margin: auto 10px;
  }

  @media (max-width: 768px) and (min-width: 426px)  {
    font-size: 2.3rem;
    margin: auto 20px;
  }
`

// const TextCopy = styled.h3`
//   margin: 10px 0;
//   color: gray;
//   font-weight: 300;
//   font-size: 2rem;

//   @media (max-width: 425px) and (min-width: 320px)  {
//     margin: 10px 0 15px;
//     font-size: 1rem;
//   }

//   @media (max-width: 768px) and (min-width: 426px)  {
//     font-size: 1.6rem;
//   }
// `


const Header = () => {

  return (
    <ContainerHeader>
      <TextHeader>
        <Text tkey="header" tid="title" />
      </TextHeader>
    </ContainerHeader>
  )
}

export default Header
