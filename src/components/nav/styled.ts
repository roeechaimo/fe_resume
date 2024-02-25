import styled from 'styled-components';

const NavItem = styled.h3<{ $selected?: boolean }>`
  font-size: 1.2em;
  text-align: center;
  border-color: ${(props) => (props.$selected ? 'initial' : 'transparent')};
  border-width: 1px;
  border-radius: 0.1em;
  transition: border-color 0.2s linear;
  padding: 0.2em;
  &:hover {
    cursor: pointer;
  } 
`;

export default NavItem;
