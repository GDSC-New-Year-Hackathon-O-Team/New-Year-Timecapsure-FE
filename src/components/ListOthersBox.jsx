import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const Span = styled.div`
    width: 60%;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 15px;
    border: 2px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    width: 100%;
    background-color: rgb(255, 255, 255);
`;

function ListOthersBox({contents}) {
    

    return (
        <Container>
            <Span>
            {contents}
            </Span>
        </Container>
    );
}


export default ListOthersBox