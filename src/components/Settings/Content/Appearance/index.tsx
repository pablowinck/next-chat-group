import { useThemeContext } from 'contexts/ThemeContext';
import Image from 'next/image';
import React from 'react';
import { Container, Label, Selector, Title } from './styles';

const AppearanceContent: React.FC = () => {
    const { setSelectedTheme, themes } = useThemeContext();
    return (
        <Container>
            <Title>Appearence</Title>
            <Label>Themes</Label>
            <Selector onChange={(e) => setSelectedTheme(e.target.value)}>
                {themes.map((theme) => (
                    <option key={theme.name} value={theme.name}>
                        {theme.name}
                    </option>
                ))}
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
