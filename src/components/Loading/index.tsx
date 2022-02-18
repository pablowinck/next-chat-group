import React, { useEffect, useState } from 'react';
import { Container, Content, WomanSvg } from './styles';
const Loading: React.FC = () => {
    const [text, setText] = useState('Loading');
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            let newText = 'Loading';
            for (let i = 0; i < count; i++) {
                newText += '.';
            }
            setCount(count > 2 ? 0 : count + 1);
            setText(newText);
            console.log(newText);
        }, 1000);
    }, [count]);

    return (
        <Container>
            <Content>{text}</Content>
            <WomanSvg src="./svg/loading.svg" />
        </Container>
    );
};

export default Loading;
