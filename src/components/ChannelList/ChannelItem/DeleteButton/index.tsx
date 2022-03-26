import { useUserContext } from 'contexts/UserContext';
import { useUnJoinChannel } from 'hooks/useChannels';
import React from 'react';
import { Container } from './styles';

type Props = {
   channelId: string;
};

const DeleteButton: React.FC<Props> = ({ channelId }) => {
   const { user } = useUserContext();
   const { mutate } = useUnJoinChannel({ userId: `${user.id}` });
   return <Container onClick={() => mutate(channelId)} />;
};

export default DeleteButton;
