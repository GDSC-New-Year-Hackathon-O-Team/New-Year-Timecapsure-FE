import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: block;
    justify-content: center;
    width: 100%;

`;

const StyledLink = styled(Link)`
    color: inherit;
  text-decoration: none;
`; 

const FalseA = styled.div`
    font-weight: bold;
    color: red;
    flex-direction: column;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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

const TrueA = styled.div`
    width: 60%;
    max-width: 800px;
    display: block;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 7px;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    width: 100%;
    background-color: rgb(255, 255, 255);
`; 

const Span = styled.span`
    display: block;
    padding: 2px;
    font-size: 17px;
    font-weight: bold;
`; 
const YesContainer = styled.span``;

const Div = styled.div`
    display: block;
    margin: 5px;
    font-size: 15px;
`;



function ListBox({
                        id,
                        type,
                        isLocked,
                        startDate,
                        endDate,
                        question,
                        contents,
                        wantType
}) {

    return(
        <Container>
            {wantType === type ? (
                <YesContainer>
            {isLocked ? (
            <FalseA>이 타임캡슐은 잠겨있습니다</FalseA> 
            ) : (
                <StyledLink to={{ pathname:`/list/${id}`, state:{keyId:id}}}>
                    <TrueA>
                        <Div>
                        
                            {startDate}
                        
                        </Div>
                        <Span>
                            {question}
                        </Span>
                    </TrueA>
                </StyledLink>
            )}
            </YesContainer>) : (<div/>)}
        </Container>
    );
}

export default ListBox;