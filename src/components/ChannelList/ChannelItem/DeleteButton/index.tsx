import { useUserContext } from 'contexts/UserContext';
import { useUnJoinChannel } from 'hooks/useChannels';
import React from 'react';
import { Container } from './styles';

type Props = {
   channelId: string;
   isMenuOpen: boolean;
};

const DeleteButton: React.FC<Props> = ({ channelId, isMenuOpen }) => {
   const { user } = useUserContext();
   const { mutate } = useUnJoinChannel({ userId: `${user.id}` });
   return (
      <Container onClick={() => mutate(channelId)} isMenuOpen={isMenuOpen} />
   );
};

export default DeleteButton;
