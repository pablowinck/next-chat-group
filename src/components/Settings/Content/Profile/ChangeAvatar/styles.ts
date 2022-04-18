import styled, { css } from 'styled-components';

export const Loading = styled.img`
   height: 80%;
   width: 80%;
   animation: rotate 0.6s infinite ease-in-out;

   @keyframes rotate {
      0% {
         transform: rotate(0deg);
      }
      50% {
         transform: rotate(180deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`;

const ProfileImage = css`
   background-position: center;
   background-size: cover;
   border: none;
`;

const NoProfileImage = css`
   background-color: grey;
   border: 2px dashed white;
`;

const DragActive = css`
   backdrop-filter: brightness(0.7);
   font-size: 1rem;

   &::after {
      content: 'drop here';
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;

      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${(props) => props.theme.colors.success};
      border-radius: 50%;

      animation: enter 2s;

      filter: opacity(0.7);

      @keyframes enter {
         0% {
            filter: opacity(0);
         }
         100% {
            filter: opacity(0.7);
         }
      }
   }
`;

const DragReject = css`
   backdrop-filter: brightness(0.7);
   font-size: 1rem;

   &::after {
      content: 'Wrong file type';
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;

      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${(props) => props.theme.colors.error};
      border-radius: 50%;

      animation: enter 2s;

      @keyframes enter {
         0% {
            filter: opacity(0);
         }
         100% {
            filter: opacity(0.7);
         }
      }
   }
`;

const OverlayFilter = css`
   &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      backdrop-filter: brightness(0.4);
   }
`;

const ClickToChange = css`
   &::before {
      content: 'click to change';
      font-size: 1rem;
      color: white;
      animation: textEnter 0.6s;
      @keyframes textEnter {
         0% {
            opacity: 0;
            transform: translateY(-100%);
         }
         100% {
            opacity: 1;
            transform: translateY(0);
         }
      }
   }
`;

export const Container = styled.div<{
   src: string;
   isDragActive: boolean;
   isDragReject: boolean;
   loading: boolean;
}>`
   position: relative;
   width: 8rem;
   height: 8rem;
   border-radius: 50%;

   transition: all 0.4s ease-in-out;

   ${({ src }) => src && `background-image: url(${src});`}
   ${({ src }) => (src ? ProfileImage : NoProfileImage)}
   ${({ isDragActive }) => isDragActive && DragActive}
   ${({ isDragReject }) => isDragReject && DragReject}
   ${({ loading }) => loading && OverlayFilter}
   display: grid;
   align-items: center;
   justify-content: center;

   text-align: center;
   font-size: 0.8rem;
   line-height: 1.2rem;

   cursor: pointer;

   &:hover {
      filter: brightness(0.8);
      ${({ loading }) => !loading && ClickToChange}
   }
`;
