import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Position } from './store';

type ContainerProps = {
   type?: 'success' | 'error';
   position?: Position;
};

const verticalStyles = {
   top: () => css`
      top: 16px;
      flex-direction: column;
   `,
   bottom: () => css`
      bottom: 16px;
      flex-direction: column-reverse;
   `
};

const horizontalStyles = {
   left: () => css`
      left: 16px;
   `,
   center: () => css`
      left: 50%;
      transform: translateX(-50%);
   `,
   right: () => css`
      right: 16px;
   `
};

export const Container = styled.div<ContainerProps>`
   ${({ position }) => css`
      position: fixed;
      pointer-events: none;
      z-index: 9999;

      display: flex;
      gap: 10px;

      ${position.includes('left') && horizontalStyles.left()};
      ${position.includes('right') && horizontalStyles.right()};
      ${position.includes('center') && horizontalStyles.center()};
      ${position.includes('top')
         ? verticalStyles.top()
         : verticalStyles.bottom()}
   `}
`;

export const Toast = styled(motion.div)<ContainerProps>`
   max-width: 350px;
   background: #fff;
   color: #363636;
   box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
   pointer-events: auto;
   padding: 8px 10px;
   border-radius: 8px;

   display: flex;
   gap: 8px;
`;
