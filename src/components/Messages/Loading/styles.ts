import styled from 'styled-components';
export const Content = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   align-items: center;
   justify-content: center;
`;

export const Item = styled.div`
   width: 100%;
   height: auto;
   display: grid;
   grid-template-columns: 3rem 70%;
   place-content: end;
   gap: 1rem;

   &.invert {
      grid-template-columns: 70% 3rem;
      place-content: start;
   }
`;
export const Skeleton = styled.div`
   height: 3rem;
   width: 100%;
   border-radius: 12px;
   background-color: #cccc;

   animation: alterOpacity 3s linear infinite;

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
