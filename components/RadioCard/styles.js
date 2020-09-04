import styled from 'styled-components';

const playBtnHover = '${RadioCardDiv}:hover img {opacity: 1;}'

export const Cover = styled.div`
    background: url(${props => CSS.escape(props.cover)}), #232f35;
    background-size: cover;
    background-position: center;
    width: 310px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

    img {
        opacity: 0;
        width: 3rem;
        filter: drop-shadow(0 0 5px rgba(0,0,0,.555));
        transition: .2s;
    }

    ${playBtnHover}
`

export const Title = styled.h1`
    font-size: 1.7rem;
    margin-top: 1rem;
    font-weight: 500;
`

export const Label = styled.h2`
    font-size: 1.1rem;
    margin-top: -3px;
    font-weight: 400;
    color: ${props => props.theme.colors.secondary};
`

export const RadioCardDiv = styled.div`

    ${Cover}
    ${Title}
    ${Label}
    
`
