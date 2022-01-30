import axios from 'axios';
import { ChannelForm } from 'contexts/ChatContext';

export default async function loadChannels(): Promise<ChannelForm[]> {
    console.log('[loadChannels] init');

    let channelsData: ChannelForm[] = [];

    await axios.get('http://localhost:3000/channels').then((response) => {
        console.log('[loadChannels] response', response);

        channelsData = response.data;
    });

    console.log('[loadChannels] finish');
    return channelsData;
}
