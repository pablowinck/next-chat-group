import 'styled-components';
import theme from './theme';

export type Theme = typeof theme.dark;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
