import styled from 'styled-components';

const NavItem = styled.h3<{ $selected?: boolean }>`
  font-size: 1.2em;
  text-align: center;
  text-decoration: ${(props) =>
    props.$selected ? 'underline' : 'transparent'};
  font-weight: ${(props) => (props.$selected ? '800' : 'initial')};
  transition: text-decoration 0.3s linear;
  padding: 0.2em;
  &:hover {
    cursor: pointer;
  }
`;

export default NavItem;
