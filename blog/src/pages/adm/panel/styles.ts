import styled from 'styled-components';

import { maxWidth } from '../../../constants/sizes';

export const Container = styled.div`
  max-width: ${() => maxWidth};
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  .posts {
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }

  .posts > .post {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: 2px 2px 5px 1px #2222;
    margin: 0 10px;
    padding: 20px;
  }

  .controls {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .controls > span {
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 10px;
    color: #fff;
  }

  #manage-comments {
    background-color: #3e82fc;
  }

  #manage-comments:hover {
    background-color: #1261ed;
    transition: 0.2s;
  }

  #delete {
    background-color: #ff073a;
  }

  #delete:hover {
    background-color: #dd0019;
    transition: 0.2s;
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

interface IImgProps {
  url: string;
}

export const Img = styled.div<IImgProps>`
  background-image: url(${({ url }) => url});
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px #3335;
  margin: 20px 0;
`;
