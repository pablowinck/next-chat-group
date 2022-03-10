import styled from 'styled-components';

export const Items = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   padding-inline: 1.5em;
`;

export const Skeleton = styled.div`
   width: 100%;
   height: 3rem;
   background-color: #cccc;
   border-radius: 12px;

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
