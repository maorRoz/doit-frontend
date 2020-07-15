import styled from 'styled-components';

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

export const NavBarItemLayout = styled.div`
  padding: 1em;
  width: fit-content;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;

export const SubMenuLayout = styled.div<{ width?: number }>`
  box-sizing: content-box;
  padding: 1em;
  width: ${({ width }) => `${width}px` || 'fit-content'};
  cursor: pointer;
  font-weight: bold;
  background-color: #24292e;
  color: white;
`;
