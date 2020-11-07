import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #D8CFCF;

  padding: 20px;
  border-radius: 20px;

  h1 {
    margin-bottom: 10px;
  }

  .register-button {
    text-align: start;
    cursor: pointer;
  }

  a {
    color: #222;
  }

  .register-button:hover {
    transition: 0.2s;
    color: #949494;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  form > * {
    padding: 8px;
    margin: 15px;
    border-radius: 10px;
  }
`;
