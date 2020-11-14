import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background: #ccc5;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 1px #2222;
  position: relative;

  .author {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 5%;
    color: #888;
  }

  .author > span {
    font-size: 0.6rem;
  }

  > div > p {
    margin-top: 15px;
    line-height: 20px;
  }
`;
