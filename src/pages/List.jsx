import React, {useEffect, useState} from 'react';

import ListBox from '../components/ListBox'
import styled from 'styled-components';

const Container = styled.div`
   
    
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const ListWrapper = styled.div`
    padding-top: 10px;
`;


const Header = styled.h2`
margin: 0px;
padding-bottom: 3px;
font-size: 25px;

`;
const ItemList = styled.div``;


function List() {
    
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchData(){
            try{
                const response = await fetch(
                    `http://192.168.8.121:8080/timecapsure/user/1`, {
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
    /*

    const [searchResults, setSearchResults] = useState([
            {
                "id": 1,
                "category": "사랑",
                "startDate": null,
                "endDate": "2024-01-04",
                "question": "사랑하시나요?",
                "contents": "사랑합니다\n",
                "locked": false
            },
            {
                "id": 2,
                "category": "사랑",
                "startDate": null,
                "endDate": "2024-01-19",
                "question": "사랑하시나요?????",
                "contents": "사랑합니다\n",
                "locked": true
            }
        ]
    );

    */
    return(
        <Container>
            <Title>
                타임캡슐목록
            </Title>
            <ListWrapper>
                <Header>
                    사랑
                </Header>
                <ItemList>
                    {searchResults.map((item) => (
                        <ListBox
                        key = {item.id}
                        id = {item.id}
                        type = {item.category}
                        wantType = "사랑"
                        isLocked = {item.locked}
                        startDate = {item.startDate}
                        endDate = {item.endDate}
                        question = {item.question}
                        contents = {item.contents}
                        />
                    ))}
                </ItemList>
            </ListWrapper>
            <ListWrapper>
                <Header>
                    다짐
                </Header>
                <ItemList>
                    {searchResults.map((item) => (
                        <ListBox
                        wantType = "다짐"
                        id = {item.id}
                        key = {item.id}
                        type = {item.category}
                        isLocked = {item.locked}
                        startDate = {item.startDate}
                        endDate = {item.endDate}
                        question = {item.question}
                        contents = {item.contents}
                        />
                    ))}
                </ItemList>
            </ListWrapper>
            <ListWrapper>
                <Header>
                    건강
                </Header>
                <ItemList>
                    {searchResults.map((item) => (
                        <ListBox
                        wantType = "건강"
                        id = {item.id}
                        key = {item.id}
                        type = {item.category}
                        isLocked = {item.locked}
                        startDate = {item.startDate}
                        endDate = {item.endDate}
                        question = {item.question}
                        contents = {item.contents}
                        />
                    ))}
                </ItemList>
            </ListWrapper>
            <ListWrapper>
                <Header>
                    환경보호
                </Header>
                <ItemList>
                    {searchResults.map((item) => (
                        <ListBox
                        wantType = "환경보호"
                        id = {item.id}
                        key = {item.id}
                        type = {item.category}
                        isLocked = {item.locked}
                        startDate = {item.startDate}
                        endDate = {item.endDate}
                        question = {item.question}
                        contents = {item.contents}
                        />
                    ))}
                </ItemList>
            </ListWrapper>
        </Container>

    );


}

export default List;