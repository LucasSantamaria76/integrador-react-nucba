import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: relative;
  width: 90vw;
  max-width: 1000px;
  height: 70vh;
  top: 10px;
  background: transparent;

  .next,
  .prev {
    top: calc(50% - 20px);
    position: absolute;
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-size: 1.2rem;
    z-index: 2;
  }

  .next {
    right: 10px;
  }

  .prev {
    left: 10px;
    transform: scale(-1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`

export const SliderStyled = styled(motion.img)`
  width: 100%;
  height: 100%;
`
