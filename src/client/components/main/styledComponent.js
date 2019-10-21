import styled from 'styled-components';

export const Leader = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    width: 150px;
    height: 300px;
    padding: 10px;
    box-shadow: 0 0 2px #000;
    background-color: rgba(0, 228, 255, 0.4);
`;

export const p = styled.p`
    color: #333333;
`;

Leader.p = p;