import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ResidentInfo = ({ character}) => {
    
    const [characters, setCharacters] = useState ({});

    useEffect(() => {
        axios
            .get(character)
            .then(res => setCharacters(res.data))
    }, [])
    
    return (
        <div>
            
            <div className='inf-characters'>
                <p> Name: {characters.name} </p>
                <img className='img-characters' src={characters.image} alt="img" />
                <p>Status: {characters.status}</p>
                <p>Origin: {characters.origin?.name}</p>
                <p>Episode: {characters.episode?.length}</p>   
            </div>
        </div>
    );
};

export default ResidentInfo;



