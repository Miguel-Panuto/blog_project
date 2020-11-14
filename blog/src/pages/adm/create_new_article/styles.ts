import styled from 'styled-components';

import { maxWidth } from '../../../constants/sizes';

export const Container = styled.div`
  max-width: ${(_) => maxWidth};
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  .title-container {
    display: flex;
    flex-direction: column;
  }

  .title-container > input {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin: 10px 0;
  }

  .editor {
    background-color: #fff;
    margin: 2% 0;
  }

  img {
    max-width: 20px;
  }

  .controls-extra {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .tags-container {
    display: flex;
    flex-direction: column;
  }

  .tag-buttons-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }

  .tags-container > strong {
    margin-bottom: 10px;
  }

  .add-tag {
    padding: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    background-color: #d2d3d2;
    border-radius: 0 20px 20px 20px;
    margin-left: 10px;
    width: 200px;
  }

  .add-tag > input {
    padding: 5px;
    border: none;
    margin-bottom: 10px;
  }

  .add-tag > button {
    cursor: pointer;
    background-color: #d2d3d2;
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 5px 10px;
  }

  .add-tag > button:hover {
    background-color: #fff;
    transition: 0.2s;
  }

  .thumbnail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
  }

`;

interface IButtonProps {
  width: string;
  isClicked?: boolean;
}

export const Button = styled.button<IButtonProps>`
  border: 2px solid
    ${(props) => {
      if (!props.isClicked || props.isClicked === undefined) return '#048243';
      return '#32bf84';
    }};
  color: #fff;
  cursor: pointer;
  width: ${(props) => props.width};
  height: 30px;
  border-radius: 10px;
  background: ${(props) => {
    if (!props.isClicked || props.isClicked === undefined) return '#32bf84';
    return '#048243';
  }};

  :hover {
    background: ${(props) => {
      if (!props.isClicked || props.isClicked === undefined) return '#048243';
      return '#32bf84';
    }};
    border-color: ${(props) => {
      if (!props.isClicked || props.isClicked === undefined) return '#32bf84';
      return '#048243';
    }};
    transition: 0.2s;
  }
`;

interface ITagButtonProps {
  isActive: boolean;
}

export const TagButton = styled.button<ITagButtonProps>`
  color: ${(props) => {
    if (props.isActive) return '#048243';
    else return '#fff';
  }};
  background-color: ${(props) => {
    if (props.isActive) return '#fff';
    else return '#048243';
  }};
  padding: 4px 8px;
  margin-right: 10px;
  border-radius: 10px;
  border: 2px solid #32bf84;
  cursor: pointer;

  :hover {
    color: #234;
    transition: 0.2s;
  }
`;
