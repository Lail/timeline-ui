import styled from 'styled-components';

export const NavButton = styled.button`
  position: absolute;
  top: 55px
  bottom: 15px;
  border: none;
  background: transparent;
  color: hsla(0,0%,0%,0.5);
  &:hover {
    cursor: pointer;
    color: #222;
   }
  &:focus { outline: none; }
`;
export const BackButton = styled(NavButton)`left: 15px;`;
export const ForwardButton = styled(NavButton)`right: 15px;`;
