import React from 'react';

const Search = ({ handleSearch }) => {
    console.log('Search component rendered');
    return (
        <>
            <input
                type="text"
                placeholder='Search Brands...'
                onChange={(e) => handleSearch(e.target.value)}
            />
        </>
    )
}

export default React.memo(Search);