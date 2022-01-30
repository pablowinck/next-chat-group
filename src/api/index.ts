import { ChannelForm } from 'contexts/ChatContext';
import loadChannels from './channels/loadChannels';

export const api = {
    loadChannels: (): Promise<ChannelForm[]> => {
        return loadChannels();
    }
};
