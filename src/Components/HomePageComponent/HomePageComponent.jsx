import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './HomePageComponent.css';

const HomePageComponent = () => {
    const [characterData, setCharacterData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const fetchCharacterDataFromAPI = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
        console.log(response.data);
        setCharacterData(response.data.results);
    };

    useEffect(() => {
        fetchCharacterDataFromAPI();
    }, [pageNumber]);

    const moveToPreviousPage = () => {
        setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
    };

    const moveToNextPage = () => {
        setPageNumber((prevPage) => prevPage + 1);
    };

    return (
        <React.Fragment>
            <h1 className='head'>Rick and Morty</h1>
            <div className='main_container'>
                {characterData && characterData.map((it) => (
                    <div className='character_container' key={it.id}>
                        <div>
                            <img className='character_image' src={it.image} alt={it.name} />
                        </div>
                        <div className='character_description'>
                            <p>{it.status}</p>
                            <p>{it.species}</p>
                            <p>{it.origin.name}</p>
                            <p>{it.gender}</p>
                            <p>{it.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='button'>
                <button
                    className='bt'
                    disabled={pageNumber === 1}
                    onClick={moveToPreviousPage}
                >
                    Previous
                </button>
                <button
                    className='bt'
                    onClick={moveToNextPage}
                >
                    Next
                </button>
            </div>
        </React.Fragment>
    );
};

export default HomePageComponent;