import styled from 'styled-components';


export const ImgSrc = styled.img.attrs(prop => ({ src: prop.img, alt: prop.alt }))`
`


// srcset: `${prop.imgMobile} 300w, ${prop.img} 400w,`, sizes: `(max-widht: 576px) 299px,(min-widht: 577px) 400px`