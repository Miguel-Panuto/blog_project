import styled from 'styled-components';

export const Header = styled.header`
  margin: 20px 0;
  a {
    text-decoration: none;
    color: #525252;
  }

  h1 {
    text-align: center;
    margin-bottom: 10px;
  }

  .bar {
    display: flex;
    flex-direction: row;
    padding: 15px 5px 0 15px;
    background-color: #3e82fc;
  }
`;

interface INavButton {
  isActive?: boolean;
}

export const NavButton = styled.span<INavButton>`
  padding: 10px 20px;
  font-size: 20px;
  background-color: ${(props) => {
    if (!props.isActive || props.isActive === undefined) return '#FFC513';
    return '#bb3f3f'
  }};
  color: ${(props) => {
    if (!props.isActive || props.isActive === undefined) return '#525252';
    return '#fff'
  }};;

  :hover {
    background-color: #bb3f3f;
    color: #fff;
    transition: 0.2s;
  }
`;
