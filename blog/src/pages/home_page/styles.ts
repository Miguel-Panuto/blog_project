import styled from 'styled-components';

import { maxWidth } from '../../constants/sizes';

export const Container = styled.div`
  max-width: ${(_) => maxWidth};
  margin: 10px auto;
  width: 100%;

  > div {
    padding: 10px 30px;
    display: flex;
    flex-direction: row;
  }

  .content > div > ul {
    list-style: none;
    background-color: #ccc;
    padding: 20px;
    border-radius: 10px;
  }

  .content > div > ul > li {
    margin: 10px 0;
  }

  .content > div > ul > li > a {
    color: #333;
    text-decoration: none;
  }

  .content > div > ul > li > a:hover {
    color: #aaa;
    transition-duration: 0.2s;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .pagination-nav > ul {
    display: inline-block;
    list-style: none;
  }

  .pagination-item {
    text-align: center;
    display: inline-block;
    cursor: pointer;
    margin: 10px 5px;
    padding: 10px 15px;
    box-shadow: 2px 2px 5px 2px #2223;
    border-radius: 5px;
    background-color: #acf;
  }

  .pagination-item:hover {
    color: #fff;
    background-color: #9bd;
    transition: 0.2s;
  }

  .link-pg {
    color: #444;
  }
`;

