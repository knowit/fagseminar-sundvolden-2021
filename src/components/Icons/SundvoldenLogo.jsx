import React from 'react';
import styled from '@emotion/styled';
import SundvoldenSvg from './svg/sundvolden.svg';

const StyledLogoContainer = styled.div`
  svg {
    width: auto;
    height: auto;
    max-width: 33vw;
    min-width: 240px;
    max-height: 42vh;
    min-height: 334px;
  }
`;

const SundvoldenLogo = () => {
  return (
    <StyledLogoContainer>
      <SundvoldenSvg />
    </StyledLogoContainer>
  );
};

export default SundvoldenLogo;
