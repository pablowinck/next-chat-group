import { Lock } from '@styled-icons/boxicons-solid/Lock';
import styled from 'styled-components';
export const Container = styled.div<{ deleteMode: boolean }>`
   display: flex;
   justify-content: center;
   align-items: start;
   width: 100%;
   padding: 0 10%;

   user-select: none;
   cursor: pointer;

   /* position: relative; */

   animation: ${({ deleteMode }) =>
      deleteMode && 'shake 0.3s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite'};

   @keyframes shake {
      0% {
         transform: rotate(0deg);
      }
      25% {
         transform: rotate(-5deg);
      }
      50% {
         transform: rotate(0deg);
      }
      75% {
         transform: rotate(5deg);
      }
      100% {
         transform: rotate(0deg);
      }
   }

   &:active {
      cursor: grab;
   }
`;
export const Content = styled.a<{ isMenuOpen: boolean }>`
   text-decoration: none;
   color: ${(props) => props.theme.colors.text};
   user-select: none;

   position: relative;

   display: flex;
   justify-content: ${({ isMenuOpen }) => (isMenuOpen ? 'start' : 'center')};
   align-items: center;

   padding-left: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '10%')};

   width: 100%;
   margin: 0.5rem 0;
   font-size: 1.2rem;
   text-transform: uppercase;
   border-radius: 0.75rem;

   transition: all 0.3s ease-in-out;

   &:hover {
      background-color: ${(props) =>
         props.isMenuOpen && props.theme.colors.background[100]};
   }
   &.selected {
      background-color: ${(props) => props.theme.colors.background[100]};
   }
`;

export const ChannelAvatar = styled.div<{
   hasNotifications: boolean;
   isMenuOpen: boolean;
}>`
   width: 3rem;
   height: 3rem;
   border-radius: 25%;
   background-color: ${(props) => props.theme.colors.background[100]};
   margin-right: 1rem;

   position: relative;

   img {
      width: 100%;
      height: 100%;
      border-radius: 25%;
      transition: all 0.3s ease-in-out;
      &:hover {
         filter: ${({ isMenuOpen }) => !isMenuOpen && 'brightness(0.5)'};
      }
   }

   ::after {
      content: '';
      position: absolute;
      top: 65%;
      left: -0.5rem;
      width: 1rem;
      height: 1rem;
      border: 3px solid ${(props) => props.theme.colors.background[400]};
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.red[700]};

      display: ${(props) => (props.hasNotifications ? 'block' : 'none')};
   }
`;

export const PrivateIcon = styled(Lock)`
   width: 1.5rem;
   height: 1.5rem;
   position: absolute;

   color: ${(props) => props.theme.colors.secondary};

   right: 3.5rem;
`;
