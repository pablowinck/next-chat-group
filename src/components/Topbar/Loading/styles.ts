import styled from 'styled-components';
export const Skeleton = styled.div`
   height: 80%;
   width: 15rem;
   border-radius: 12px;
   background-color: #cccc;

   animation: alterOpacity 3s linear infinite;

   position: relative;

   &:after {
      content: '';
      height: 100%;
      width: 3rem;
      border-radius: 12px;
      background-color: #cccc;
      position: absolute;
      top: 0;
      right: -3.5rem;
   }

   @keyframes alterOpacity {
      0% {
         opacity: 0.1;
      }
      50% {
         opacity: 0.7;
      }
      100% {
         opacity: 0.1;
      }
   }
`;
