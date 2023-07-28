import React, { useEffect, useState } from 'react'

export const Inicio = () => {

    const [character, setCharacter] = useState([])

    const getData = async () =>{

        try {
    
          const res = await fetch ('https://rickandmortyapi.com/api/character/1,2,3,4')
          const data = await res.json();
          setCharacter(data);
          console.log(data);
    
        } catch (error) {
    
          console.error(error); 
    
        }
    
    }


    useEffect(() => {
        getData();
      }, []);

    return (

        <div>

            <div className='img-carousel'>
                <img src="https://wallpapercave.com/wp/wp1822740.png" alt="img" />
            </div>

            <div className='container'>
                <div className='cards'>

                    {character.map(char => (

                        <div className="card" style={{ width: "18rem", marginTop: "50px" }}>
                            <img src={char.image} alt="card-img" />
                            <div className="card-body">
                                <h5 className="card-title">{char.name}</h5>
                                <p className="card-text">{char.species}</p>
                                <a className='card-text' href={`/characters/${String(char.id)}`}>Ver mas ...</a>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

            
            <div className="a-vertodos">
                <a href="/characters" >Ver todos...</a>
            </div>

        </div>
    )
}
