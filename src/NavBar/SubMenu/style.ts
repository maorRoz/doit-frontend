import styled, { css } from 'styled-components';

export const SubMenuLayout = styled.div`
  box-sizing: content-box;
  cursor: pointer;
  font-weight: bold;
  background-color: #394047;
  color: white;
  width: 12em;
  &:first-child {
    padding-top: 0.3em;
  }
  &:last-child {
    padding-bottom: 0.3em;
  }
`;

export const SubMenuItemLayout = styled.div<{ hovered?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #24292e;
  }
  ${({ hovered }) =>
    hovered &&
    css`
      background-color: #24292e;
    `}

  height: 1.5em;
  padding: 0.5em 0 0.5em 0.3em;
`;
