import React, {useEffect, useState} from 'react';

import ListOthersBox from '../components/ListOthersBox'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Container = styled.div``;
const BoxList = styled.div``;


const Title = styled.h1`
    display: flex;
    justify-content: center;
    width: 100%;
`;

function ListOthers() {
    
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); 
    useEffect(() => {
        async function fetchData(){
            setLoading(true);
            try{
                const response = await fetch(
                    `http://192.168.8.121:8080/timecapsure/${id}/others`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    })
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            
                const searchData = await response.json();
                setSearchResults(searchData);
            
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
                다른 사람의 타임캡슐 목록
            </Title>
            <BoxList>
            {searchResults.map((item) => (
                        <ListOthersBox
                        key = {item.id}
                        id = {item.id}
                        contents = {item.contents}
                        />
                    ))}
            </BoxList>
        </Container>
    );
}
export default ListOthers