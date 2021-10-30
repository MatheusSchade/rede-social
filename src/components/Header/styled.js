import styled from "styled-components"
import { Color1, Color5 } from "../../constants/colors"
import { FaUserFriends } from "react-icons/fa"
import { ImHome3 } from "react-icons/im";
import { IoLogOut } from "react-icons/io5";

export const Head = styled.div`
height: 10vh;
background-color: ${Color1};
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: 3px 3px 3px gray;
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 999px;

@media(max-width: 400px) and (max-height: 700px) {
    height: 8vh;
}

h1{
    color: ${Color5};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    cursor: default;

    @media(max-width: 400px) and (max-height: 700px) {
    font-size: 24px  
    }
}
`

export const LogoIcon = styled(FaUserFriends)`
margin-left: 12px;
margin-top: 4px;
color: ${Color5};
@media(max-width: 400px) and (max-height: 700px) {
    margin-left: 10px;
    margin-top: 0px;
}
`

export const LeftButton = styled.button`
margin-left: 3vw;
height: 2.4em;
width: 12vw;
color: ${Color5};
border: none;
font-size: 20px;
background-color: ${Color1};
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

@media(max-width: 400px) and (max-height: 700px) {
    font-size: 14px;
    }
`

export const Home3 = styled(ImHome3)`
margin-left: 4px;
margin-bottom: 4px;
color: ${Color5};
cursor: pointer;
`

export const LogOutOutline = styled(IoLogOut)`
margin-left: 4px;
color: ${Color5};
cursor: pointer;
`

export const RightButton = styled.button`
margin-right: 3vw;
height: 2.4em;
width: 12vw;
border: none;
font-size: 20px;
cursor: pointer;
color: ${Color5};
background-color: ${Color1};
display: flex;
justify-content: center;
align-items: center;
@media(max-width: 400px) and (max-height: 700px) {
    font-size: 14px;
    }
`