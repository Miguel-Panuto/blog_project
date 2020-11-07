import styled from 'styled-components';
import { primaryColor } from '../constants/colors';
import { maxWidth } from '../constants/sizes';
import chillImage from '../assets/images/chill_bg.jpg';

export const HeaderStylled = styled.header`
  background-image: url(${() => chillImage});
  background-repeat: no-repeat;
  min-height: 400px;
  height: 40vh;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  box-shadow: 2px 2px 4px 1px #2225;

  div {
    background-color: #3337;


    cursor: pointer;
    padding: 20px 0;
    margin: auto;
    width: 100%;
    height: 100%;
  }

  h1 {
    position: relative;
    top: 40%;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: #fff;
    font-size: 3rem;
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`;
