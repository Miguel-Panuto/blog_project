import styled from 'styled-components';

import { maxWidth } from '../../../constants/sizes';

export const Container = styled.div`
  max-width: ${() => maxWidth};
  margin: 0 auto;
  position: relative;

  .comments > p {
    margin-top: 10px;
    font-size: 0.7rem;
  }

  .comments > div {
    margin-top: 30px;
    font-size: 0.9rem;
  }
`;
