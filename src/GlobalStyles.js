import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
    /* Colors */
    --color-background: #efefef;
    --color-primary: #00ADB5;
    --color-primary-dark: #008F96;
    --color-text: #393E46;
    --color-text-light: #A0A0A0;
    --color-dark: #222831;
    --color-progress-gradient: linear-gradient(to right, rgba(0,44,255,1), rgba(0,173,181,1));

    /* Neumorphism */
    --box-shadow-convex: -4px -4px 12px rgba(255, 255, 255, 0.8), -6px -6px 8px rgba(255, 255, 255, 0.6),
        6px 6px 8px rgba(255, 255, 255, 0.08), 6px 6px 10px rgba(0, 0, 0, 0.2);
    --box-shadow-flat: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
            2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
    --box-shadow-concave: inset -2px -2px 6px rgba(255, 255, 255, 0.7),
            inset -2px -2px 4px rgba(255, 255, 255, 0.5),
            inset 2px 2px 2px rgba(255, 255, 255, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);

    /* Generic */
    --main-font: 'Poppins';
    --font-sm: .6rem;
    --font-md: .7rem;
    --font-lg: 1.4rem;
    --radius-sm: 5px;
    --radius-md: 10px;
    --radius-lg: 15px;
    --radius-full: 50px;
    --transition: 0.3s ease-in-out;

    /* Spaces */
    --space-sm: .3rem;
    --space-md: .8rem;
    --space-lg: 2.2rem;

    /* Sizes */
    --min-tap-target-height: 48px;

    @media (pointer: coarse) {
        --min-tap-target-height: 54px;
    }

    /* Font */
    font-size: clamp(.5rem, 0.75rem + 1.5vw, 1.5rem);
    font-family: var(--main-font);
}

body {
    background-color: var(--color-background);
    color: var(--color-text);
    font-size: var(--font-md)
}

input, textarea, button {
    font-family: inherit;
    font-size: var(--font-sm);
}

#root{
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    height:100vh;
    gap: var(--space-md);
    justify-content: center;
}
`;

export default GlobalStyles;
