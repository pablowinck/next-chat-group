import styled from 'styled-components';

export const Container = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   animation: slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1);

   height: auto;
   width: min(50rem, 75vw);
   padding: 2rem;

   display: flex;
   flex-direction: column;

   background-color: ${(props) => props.theme.colors.background[300]};
   color: ${(props) => props.theme.colors.text};
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
   border-radius: 18px;

   @keyframes slideUp {
      0% {
         opacity: 0;
         transform: translate(-50%, -56%);
      }
      100% {
         opacity: 1;
         transform: translate(-50%, -50%);
      }
   }
`;
