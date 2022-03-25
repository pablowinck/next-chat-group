import { motion } from 'framer-motion';
import styled from 'styled-components';
export const Container = styled(motion.div)`
   position: fixed;
   height: 100%;
   width: auto;
   top: 0;
   left: 0;

   z-index: 100;

   display: grid;
   grid-template-rows: 59.49px auto 59.49px;
   grid-template-columns: 1fr;
   grid-template-areas: 'CH' 'CL' 'ON';
`;
export const Overlay = styled(motion.div)`
   position: fixed;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   z-index: 99;
   background: rgba(0, 0, 0, 0.5);
   backdrop-filter: blur(5px);
`;
