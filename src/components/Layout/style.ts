import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline';
import styled from 'styled-components';

// CH -  Channel Header
// CL -  Channel List
// TP -  Top bar
// MS -  Messages
// ON -  Online User

export const Grid = styled.div<{
   menuIsOpen: boolean;
}>`
   display: grid;
   grid-template-columns: ${({ menuIsOpen }) =>
         menuIsOpen ? '324px' : '100px'} auto;
   grid-template-rows: 59.49px auto 75.42px;
   grid-template-areas: 'CH TP' 'CL MS' 'ON MS';
   height: 100vh;

   position: relative;

   overflow: none;

   @media (max-width: 768px) {
      grid-template-columns: auto auto;
      grid-template-rows: 59.49px auto auto;
      grid-template-areas: 'TP TP' 'MS MS' 'MS MS';
   }
`;
export const ButtonMobileMenu = styled.button`
   position: fixed;
   top: 0.5rem;
   left: 0.5rem;
   z-index: 50;

   height: 2.5rem;
   width: 2.5rem;
   border-radius: 50%;
   background-color: ${(props) => props.theme.colors.background[100]};

   display: grid;
   place-items: center;

   cursor: pointer;

   @media (min-width: 768px) {
      display: none;
   }
`;

export const MenuIcon = styled(MenuOutline)`
   width: 1.5rem;
   color: white;
`;
