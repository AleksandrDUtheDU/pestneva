import { createGlobalStyle } from "styled-components";
import GilroyBoldEot from "../../resources/fonts/gilroy-bold.eot";
import GilroyBoldEotIefix from "../../resources/fonts/gilroy-bold.eot?#iefix";
import GilroyBoldWoff2 from "../../resources/fonts/gilroy-bold.woff2";
import GilroyBoldWoff from "../../resources/fonts/gilroy-bold.woff";
import GilroyBoldTtf from "../../resources/fonts/gilroy-bold.ttf";
import GilroyBoldSvg from "../../resources/fonts/gilroy-bold.svg#gilroy-bold";
import GilroyMediumWoff from "../../resources/fonts/Gilroy-Medium.woff";
import GilroyMediumTtf from "../../resources/fonts/Gilroy-Medium.ttf";

const FontStyles = createGlobalStyle`
* {
    font-family: 'Gilroy', sans-serif;
}

@font-face {
	font-family: 'Gilroy';
	src: url(${GilroyBoldEot}); /* IE 9 Compatibility Mode */
	src: 
		url(${GilroyBoldEotIefix}) format('embedded-opentype'), /* IE < 9 */
		url(${GilroyBoldWoff2}) format('woff2'), /* Super Modern Browsers */
		url(${GilroyBoldWoff}) format('woff'), /* Firefox >= 3.6, any other modern browser */
		url(${GilroyBoldTtf}) format('truetype'), /* Safari, Android, iOS */
		url(${GilroyBoldSvg}) format('svg'); /* Chrome < 4, Legacy iOS */
    font-weight: 700;
    font-style: normal;
    font-display: auto;
}

@font-face {
	font-family: 'Gilroy';
	src: 
		url(${GilroyMediumWoff}) format('woff'), /* Firefox >= 3.6, any other modern browser */
		url(${GilroyMediumTtf}) format('truetype'); /* Safari, Android, iOS */
    font-weight: 500;
    font-style: normal;
    font-display: auto;
}
`;

export default FontStyles;