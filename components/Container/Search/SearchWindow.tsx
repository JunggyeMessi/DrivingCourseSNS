import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import SearchFilter from './SearchFilter';

const Window = styled.div`
    
`;

const SearchWindow = () => {
    return (
        <Window>
            <SearchBar></SearchBar>
            <SearchFilter></SearchFilter>
        </Window>
    );
};

export default SearchWindow;