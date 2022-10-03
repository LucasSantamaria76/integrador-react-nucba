import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1100;
  width: 100%;
  height: 100vh;
  background-color: #00000044;
  backdrop-filter: blur(2px);
`;
