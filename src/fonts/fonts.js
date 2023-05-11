import { createGlobalStyle } from 'styled-components';

import PoppinsWoff from './Poppins.woff';
import PoppinsWoff2 from './Poppins.woff2';
import PoppinsMediumItalic from './PoppinsMediumItalic.otf';

export default createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src:
    url(${PoppinsWoff2}) format('woff2'),
    url(${PoppinsWoff}) format('woff');
    font-style: normal;    
}
@font-face {
    font-family: 'Poppins Italic';
    src:
    url(${PoppinsMediumItalic}) format('otf');
    font-style: italic;    
}
`;
