import styled from 'styled-components';

import { primaryColor, accentColor } from '../../../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 40px;
  margin: 30px 2%;
  box-shadow: 2px 2px 5px 2px #2223;
  padding: 20px;
  border-radius: 5px;

  .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
  }

  div > strong, span {
    color: #374;
  }

  .date {
    font-size: 0.6rem;
  }

  .tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .tags > h6,
  .tags > span {
    font-size: 0.6rem;
    color: #999;
    margin-right: 5px;
  }

  h3 {
    color: ${(_) => primaryColor};
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  a {
    color: ${(_) => accentColor};
    font-weight: bold;
    text-decoration: none;
  }

  h3:hover {
    color: #ac1731;
    transition-duration: 0.2s;
  }

  a:hover {
    color: #895422;
    transition-duration: 0.2s;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

interface IImg {
  url: string;
}

export const Img = styled.div<IImg>`
  border-radius: 5px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 300px;
  max-width: 300px;
  width: 300px;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;
    height: 200px;
  }
`;
