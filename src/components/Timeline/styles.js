import styled from 'styled-components';
import StringyDate from '../../classes/StringyDate';

export const Wrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  background: white;
  border-radius: 5px;
  background:  hsla(0,0%,100%,0.70);
  box-shadow: 0 0 0 1px hsla(0,0%,0%,0.15);
  overflow: hidden;
`;
export const Header = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  height: 40px;
  padding: 10px 15px;
  font-size: 14px;
  background: white;
  box-shadow: 0 0 0 1px hsla(0,0%,0%,0.15);
`;
export const Today = styled.div`
  position: absolute;
  top: 47px;
  bottom: 7px;
  left: ${({from, dayWidth}) => new StringyDate(from).getDaysUntil(new StringyDate()) * dayWidth}%;
  border-radius: 3px;
  background: hsla(0,100%,75%,0.80);
  width: 2px;
`;
export const Events = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: scroll;
`;
