import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import styled from 'styled-components';

export const Container = styled.div`
   grid-area: ON;
   background-color: ${(props) => props.theme.colors.background[800]};
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 18px 27px;

   position: relative;

   user-select: none;

   .content {
      display: flex;
      gap: 0.5rem;
      align-items: center;
   }

   span {
      font-size: 18px;
      font-weight: 700;
      color: ${(props) => props.theme.colors.text};
   }
`;
export const Avatar = styled.div<{ isOpenMenu: boolean }>`
   width: 42px;
   height: 42px;

   border-radius: 7px;

   margin-right: 0.5rem;

   cursor: ${({ isOpenMenu }) => !isOpenMenu && 'pointer'};

   transition: ${({ isOpenMenu }) => !isOpenMenu && 'filter 0.3s ease-in-out'};

   &:hover {
      filter: ${(props) => !props.isOpenMenu && 'brightness(0.5)'};
   }
   img {
      width: 100%;
      height: 100%;
      border-radius: 7px;
   }
`;

export const MoreIcon = styled(ArrowIosDownwardOutline)`
   width: 1.5rem;
   height: 1.5rem;

   cursor: pointer;

   color: ${(props) => props.theme.colors.text};

   /* transition: all 0.3s ease-in-out; */
`;
