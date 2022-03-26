import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle';
import styled from 'styled-components';

export const Container = styled(CloseCircle)<{ isMenuOpen: boolean }>`
   position: absolute;
   left: ${({ isMenuOpen }) => (isMenuOpen ? '-11px' : '0')};
   top: -10px;

   width: 1.5rem;

   transition: all 0.3s ease-in-out;

   &:hover {
      color: darkgrey;
   }
`;
