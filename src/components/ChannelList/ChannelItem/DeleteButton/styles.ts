import styled from 'styled-components';
import {CloseCircle} from '@styled-icons/evaicons-solid/CloseCircle'

export const Container = styled(CloseCircle)`
  position: absolute;
  left: 0;
  top: -13px;

  width: 1.5rem;

  transition: all .3s ease-in-out;

  &:hover {
     color: darkgrey;
  }
`;
