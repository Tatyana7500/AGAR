import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    
`;
export const Login = styled.div`
    position:absolute;
    z-index:20;
    width: 25vw;
    height:30vh;
    left: 50%;
    top: 50%;
    transform: translate( -50%, -50%);
    background-color: #fff;
    border-radius:20px;
    display:flex;
    justify-content: center;
    align-items: center;
`;

const name = styled.input`
    border:1px solid #000;
    height:10%;
`;
const submit = styled.button`
    height:10%;
    border:0;
    background-color:green;
    color:#fff;
    `
;
const color = styled.input``;
const blur = styled.div`
    width:100%;
    height:100%;
    position: absolute;
    background-color: rgba(0,0,0, .3);
    z-index:10;
`;

Wrapper.Login = Login;
Wrapper.blur = blur;
Login.name = name;
Login.color = color;
Login.submit = submit;