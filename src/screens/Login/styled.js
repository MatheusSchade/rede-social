import styled from "styled-components"
import { Color1, Color4, Color5 } from "../../constants/colors";

export const LoginImage = styled.div`
width: 33.25vw;
margin-top: 25px;
@media(max-width: 400px) and (max-height: 700px) {
    width: 90vw;
    }
@media(min-width: 401px) and (max-width: 600px) and (min-height: 701px) and (max-height: 900px) {
    width: 90vw; 
}
@media(min-width: 601px) and (max-width: 900px) and (min-height: 901px) and (max-height: 1300px) {
    width: 90vw;
    }
img {
    width: 100%;
    max-height: 80vh;
}
`

export const LoginScreen = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
height: 100vh;
margin-top: 10vh;
@media(max-width: 600px) and (max-height:900px) {
height: 75vw;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
margin: 0 auto;
input {
    margin-top: 2.5vh;
    width: 33%;
    height: 2.4em;
    border: 1px solid ${Color1};
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    color: ${Color1};
    @media(max-width: 600px) and (max-height: 900px) {
    width: 80vw;
    }
    @media(min-width: 601px) and (max-width: 900px) and (min-height: 901px) and (max-height: 1300px) {
    width: 65vw;
    font-size: 16px;
    }
}
button {
    margin-top: 2.5vh;
    height: 2.4em;
    width: 33.6vw;
    border: 1px solid ${Color1};
    border-radius: 10px;
    cursor: pointer;
    background-color: ${Color1};
    color: white;
    box-shadow: 3px 3px 3px gray;
    @media(max-width: 600px) and (max-height: 900px) {
    width: 80vw;
    }
    @media(min-width: 601px) and (max-width: 900px) and (min-height: 901px) and (max-height: 1300px) {
    width: 65vw;
    font-size: 16px;
    }
}
`

export const Cadastro = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const CadastroButton = styled.button`
    margin-top: 5vh;
    height: 2.4em;
    width: 33.6vw;
    border: none;
    cursor: pointer;
    color: ${Color1};
    background-color: white;
    @media(max-width: 600px) and (max-height: 900px) {
    width: 80vw;
    }
    @media(min-width: 601px) and (max-width: 900px) and (min-height: 901px) and (max-height: 1300px) {
    width: 100vw;
    font-size: 16px;
    }
    :hover {
        background-color: ${Color5};
        border-radius: 10px;
    }
    :active {
        background-color: ${Color4};
        border-radius: 10px;
    }
`