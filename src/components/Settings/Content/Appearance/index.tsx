import Image from 'next/image';
import React from 'react';
import { Container, Label, Selector } from './styles';

const AppearanceContent: React.FC = () => {
    return (
        <Container>
            <Label>Themes</Label>
            <Selector>
                <option>Dark</option>
                <option>Light</option>
            </Selector>
            <Image
                src="/svg/appearence-illustration.svg"
                alt="Illustration"
                height="600rem"
                width="600rem"
            />
        </Container>
    );
};

export default AppearanceContent;
