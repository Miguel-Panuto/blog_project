import styled from 'styled-components';

import { maxWidth } from '../../constants/sizes';

import { primaryColor, accentColor } from '../../constants/colors';

export const Container = styled.div`
  max-width: ${(_) => maxWidth};
  width: 100%;
  margin: 10px auto;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  ul {
    list-style: none;
    background-color: #ccc;
    padding: 20px;
    border-radius: 10px;
  }

  ul > li {
    margin: 10px 0;
  }

  ul > li > a {
    color: #333;
    text-decoration: none;
  }

  ul > li > a:hover {
    color: #AAA;
    transition-duration: 0.2s;
  }
`;

export const Post = styled.div`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    margin-right: 40px;
  }

  div > strong {
    color: #777;
  }

  .tags {
    justify-content: flex-start;
  }

  .tags > h6, .tags > span {
    font-size: 0.8rem;
    color: #999;
    margin-right: 5px;
  }

  h3 {
    color: ${(_) => primaryColor};
    margin-bottom: 10px;
  }

  margin: 10px 5px;

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
`;
