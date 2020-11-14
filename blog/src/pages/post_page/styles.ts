import styled from 'styled-components';

import { maxWidth } from '../../constants/sizes';

export const Container = styled.div`
  max-width: ${(_) => maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 2% 10px;

  background-color: #ccc2;

  > .tags {
    color: #aaa;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    font-size: 0.8rem;
  }

  > .tags > span {
    margin-left: 5px;
  }

  > div {
    margin: 0 20px;
  }

  .content > p, .comments-section {
    padding-right: 10px;
    padding-left: 10px;
  }

  .content > p {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 30px;
  }

  .comments-section > p {
    margin-top: 10px;
    font-size: 0.7rem;
  }

  .comments-section > div {
    margin-top: 30px;
    font-size: 0.9rem;
  }

  .comments-section > form {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .input-comment {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

interface IHeader {
  thumbnail: string | undefined;
}

export const Header = styled.header<IHeader>`
  background-image: ${(props) => `url(${props.thumbnail})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  height: 30vh;

  h2, .date-post {
    margin: 0 auto;
    max-width: 500px;
    text-align: center;
  }

  h2 {
    color: #fff;
    font-family: 'Playfair Display', serif;
    padding: 0 2%;
    padding-top: 10vh;
    font-weight: normal;
    word-wrap: wrap;
    height: inherit;
  }

  .date-post {
    color: #ccc;
    font-size: 0.8rem;
  }

  .header-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3337;
    padding: 20px 0;
    margin: auto;
    height: 40vh;
    width: 100%;
    height: 100%;
  }
`;
