import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

export const Details = () => {
    
    const [character, setCharacter] = useState({})

    const {id} = useParams();




    const getData = async () => {

        try {

            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await res.json();
            setCharacter(data)
            console.log(data);

        } catch (error) {

            console.error(error);

        }
    }

    useEffect(() => {
        getData();
    }, [])
    

  return (

    <div className='container details'>

        <div className='img-details'>
            <img src={character.image} alt={character.id} />
        </div>

        <div className='info-details'>
            <p>Name: {character.name}</p>
            <p>Status: {character.status}</p>
            <p>Specie: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Episodes: {`${character.episode}`.length}</p>
        </div>

    </div>
  )
}
