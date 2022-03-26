import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
   position: fixed;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background: rgba(0, 0, 0, 0.5);
   backdrop-filter: blur(5px);
`;
