import { ArrowLeftCircleFill } from '@styled-icons/bootstrap/ArrowLeftCircleFill';
import { Add } from '@styled-icons/fluentui-system-filled/Add';
import styled from 'styled-components';
export const Container = styled.header`
   grid-area: CH;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 33px;
   background-color: ${(props) => props.theme.colors.background[400]};

   color: ${(props) => props.theme.colors.text};
   user-select: none;

   z-index: 1;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

   position: relative;

   span {
      font-size: 18px;
      font-weight: 700;
   }
`;

export const Content = styled.div`
   display: flex;
   gap: 1rem;
   .closed {
      transform: rotate(180deg);
   }
`;
export const OpenCloseButton = styled.div`
   position: relative;
   display: grid;
   place-items: center;
   transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
   &::after {
      content: '';
      width: 1rem;
      height: 1rem;
      background: white;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
   }
`;
export const OpenCloseIcon = styled(ArrowLeftCircleFill)`
   width: 1.5rem;
   color: ${(props) => props.theme.colors.background[100]};
   cursor: pointer;
   transition: all 0.3s ease-in-out;
   &:hover {
      color: ${(props) => props.theme.colors.primary.main};
   }
`;
export const Rounded = styled.button`
   width: 32px;
   height: 32px;
   border-radius: 8px;

   background-color: ${(props) => props.theme.colors.background[100]};
   border: none;

   display: flex;
   justify-content: center;
   align-items: center;

   cursor: pointer;

   transition: all 0.3s ease-in-out;

   &:hover {
      background-color: ${(props) => props.theme.colors.primary.main};
      color: white;
   }
`;
export const AddIcon = styled(Add)`
   height: 14px;
   width: 14px;

   color: ${(props) => props.theme.colors.text};
`;
