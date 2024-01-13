import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const Div = styled.div`
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


const Span = styled.div`
margin-left : 3px;
margin-right: 5px;
 `;

const Question = styled.div`
    display: block;
    font-weight: bold;
    padding: 7px;
    font-size: 18px;
    margin-top: 5px ;
    margin-bottom: 5px ;
`;

const Contents = styled.div`
    padding: 7px;
    margin-bottom: 3px;
`;

function ListDetailBox({
                        id,
                        type,
                        isPrivate,
                        startDate,
                        endDate,
                        question,
                        contents,
}) {
    

    return (
        <Container>
            <Div>
            <Span>
                {endDate}
            </Span>
            <Span>
                {type}
            </Span>
            <Question>
                {question}
            </Question>
            <Contents>
                {contents}
            </Contents>
            </Div>
        </Container>
    );
}


export default ListDetailBox;