import { useThemeContext } from 'contexts/ThemeContext';
import Image from 'next/image';
import React from 'react';
import { ArrowDown, Container, Input, Label, Selector, Title } from './styles';

const AppearanceContent: React.FC = () => {
    const { setSelectedTheme, themes, selectedTheme } = useThemeContext();

    return (
        <Container>
            <Title>Appearence</Title>
            <Label>Themes</Label>
            <Input>
                <ArrowDown>V</ArrowDown>
                <Selector onChange={(e) => setSelectedTheme(e.target.value)}>
                    {themes.map((theme) => (
                        <option
                            key={theme.name}
                            value={theme.name}
                            selected={theme.name === selectedTheme}
                        >
                            {theme.name}
                        </option>
                    ))}
                </Selector>
            </Input>
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
