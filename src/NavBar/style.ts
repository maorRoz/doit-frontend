import styled, { css } from 'styled-components';

export const NavBarLayout = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  font-weight: bold;
  background-color: #24292e;
  color: white;
`;

export const NavBarHeader = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1012px;
`;

export const NavBarItemLayout = styled.div<{ hovered?: boolean }>`
  padding: 1em;
  width: fit-content;
  cursor: pointer;
  &:hover {
    background-color: #5a9c49;
  }
  ${({ hovered }) =>
    hovered &&
    css`
      background-color: #5a9c49;
    `}
`;
