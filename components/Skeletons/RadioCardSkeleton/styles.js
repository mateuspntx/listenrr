import styled from 'styled-components';

export const Cover = styled.div`
    background: ${props => props.theme.colors.shimmerEffect};
    background-size: cover;
    background-position: center;
    width: 310px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    img {
        opacity: 0;
        width: 3rem;
        filter: drop-shadow(0 0 5px rgba(0,0,0,.555));
        transition: .2s;
    }
`

export const Title = styled.h1`
    margin-left: 0;
    width: 80%;
    height: 25px;
    font-size: 1.7rem;
    margin-top: 1.5rem;
    font-weight: 500;
    transition: color .5s;
    background: ${props => props.theme.colors.shimmerEffect};
    border-radius: 5px;
`

export const Label = styled.h2`
    margin-left: 0;
    width: 50%;
    height: 20px;
    background: ${props => props.theme.colors.shimmerEffect };
    font-size: 1.1rem;
    margin-top: 10px;
    font-weight: 300;
    border-radius: 3px;
`

export const RadioCardDiv = styled.div`
    ${Cover}
    ${Title}
    ${Label}
`
