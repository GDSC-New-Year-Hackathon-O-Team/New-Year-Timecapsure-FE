import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom';
import ListDetailBox from '../components/ListDetailBox'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Container = styled.div`
    
`;
const BoxStyle = styled.div`
    width: 100%;
    display: block;
    justify-content: center;
    padding-bottom: 7px;
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const ButtonLink = styled(Link)`
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 11px auto;
    padding: 12px;
    border: 2px solid #ccc;
    border-radius: 17px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    font-size: 17px;
`;


function ListDetail() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const { keyId } = useParams(); 
    
    useEffect(() => {
        async function fetchData(){
            try{
                const response = await fetch(
                    `http://192.168.8.121:8080/timecapsure/${keyId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    })
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            
                const searchData = await response.json();
                const resultsArray = Array.isArray(searchData) ? searchData : [searchData];
                setSearchResults(resultsArray);
            
            }catch (error) {
                console.error("Failed to fetch data:", error);
            }
            setLoading(false);
        }

        fetchData();
        
    }, []);

    if(loading) {
        return <div>Loading...</div>;
    }



    return(
        <Container>
            <Title>
                타임캡슐 세부정보
            </Title>
            <BoxStyle>
            {searchResults.map((item) => (
                        <ListDetailBox
                        key = {item.id}
                        id = {item.id}
                        type = {item.category}
                        isPrivate = {item.isPrivate}
                        startDate = {item.startDate}
                        endDate = {item.endDate}
                        question = {item.title}
                        contents = {item.contents}
                        />
                    ))}
            <ButtonLink to={{ pathname:`/list/${keyId}/others`, state:{id:keyId}}}>
                다른 사람의 타임 캡슐 구경하기
            </ButtonLink>
            </BoxStyle>
        </Container>
    );
}
export default ListDetail