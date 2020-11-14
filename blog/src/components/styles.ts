import styled from 'styled-components';
import chillImage from '../assets/images/chill_bg.jpg';

import { maxWidth } from '../constants/sizes';

export const HeaderStylled = styled.header`
  position: relative;
  background-image: url(${() => chillImage});
  background-repeat: no-repeat;
  min-height: 400px;
  height: 40vh;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  box-shadow: 2px 2px 4px 1px #2225;

  .header-content {
    background-color: #3337;
    cursor: pointer;
    padding: 20px 0;
    margin: auto;
    height: 40vh;
    width: 100%;
    height: 100%;
  }

  .header-content > div {
    max-width: ${(_) => maxWidth};
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }

  h1 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: #fff;
    font-size: 3rem;
  }

  a {
    text-decoration: none;
    color: #3337;
  }
`;

export const DrawerTitle = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > span {
    color: #555;
    font-weight: bold;
  }
`;