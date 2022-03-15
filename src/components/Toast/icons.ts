import styled, { keyframes } from 'styled-components';

const circleAnimation = keyframes`
from {
  transform: scale(0) rotate(45deg);
  opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
  opacity: 1;
}`;

/* -------------------------------------------------------------------------------------------------
 * Success Icon
 * -----------------------------------------------------------------------------------------------*/

const checkmarkAnimation = keyframes`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`;

const CheckmarkIcon = styled.div`
   width: 20px;
   opacity: 0;
   height: 20px;
   border-radius: 10px;
   background: #61d345;
   position: relative;
   transform: rotate(45deg);
   animation: ${circleAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      forwards;
   animation-delay: 100ms;
   &:after {
      content: '';
      box-sizing: border-box;
      animation: ${checkmarkAnimation} 0.2s ease-out forwards;
      opacity: 0;
      animation-delay: 200ms;
      position: absolute;
      border-right: 2px solid;
      border-bottom: 2px solid;
      border-color: #fff;
      bottom: 6px;
      left: 6px;
      height: 10px;
      width: 6px;
   }
`;

/* -------------------------------------------------------------------------------------------------
 * Error Icon
 * -----------------------------------------------------------------------------------------------*/

const firstLineAnimation = keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`;

const secondLineAnimation = keyframes`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`;

const ErrorIcon = styled.div`
   width: 20px;
   opacity: 0;
   height: 20px;
   border-radius: 10px;
   background: #ff4b4b;
   position: relative;
   transform: rotate(45deg);
   animation: ${circleAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      forwards;
   animation-delay: 100ms;
   &:after,
   &:before {
      content: '';
      animation: ${firstLineAnimation} 0.15s ease-out forwards;
      animation-delay: 150ms;
      position: absolute;
      border-radius: 3px;
      opacity: 0;
      background: #fff;
      bottom: 9px;
      left: 4px;
      height: 2px;
      width: 12px;
   }
   &:before {
      animation: ${secondLineAnimation} 0.15s ease-out forwards;
      animation-delay: 180ms;
      transform: rotate(90deg);
   }
`;

export const toastIcons = {
   blank: () => null,
   success: CheckmarkIcon,
   error: ErrorIcon
};
