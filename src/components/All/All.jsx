import React, { useEffect, useState } from 'react'

const filterProducts = (character, buscado) => {
  if (!buscado) return character;

  return character.filter((p) => `${p.name}`.toLowerCase().includes(buscado.toLowerCase()));
};


export const All = () => {

  const [character, setCharacter] = useState([])

  const [currentPage, setCurrentPage] = useState(1)

  const [lastNumPage, setLastNumPage] = useState(3)

  const [firstNumPage, setfirstNumPage] = useState(1)

  const [pag, setPag] = useState([1, 2, 3])

  const [buscado, setBuscado] = useState('')

  const filteredProducts = filterProducts(character, buscado);






  const getData = async () => {

    try {

      const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      const data = await res.json();
      setCharacter(data.results);
      console.log(data.results);

    } catch (error) {

      console.error(error);

    }

  }


  const incrementPage = () => {

    setCurrentPage(currentPage + 1)

    if (currentPage === pag[pag.length-1]) {

      setPag([pag[pag.length-1], pag[pag.length-1] + 1, pag[pag.length-1] + 2])      

    }

  }

  const decrementPage = () => {

    currentPage >= 3 ? setCurrentPage(currentPage - 1) : console.log('NO SE PUEDE');

    if ((currentPage === pag[0]) && (currentPage >= 3)) {

      setPag([pag[2] - 4, pag[1] - 2, pag[0]])
      console.log(pag, "estamos en el decrement");
      
    }

  }

  useEffect(() => {

    getData();
  }, [currentPage]);



  return (

    <div className='container'>

      <div className='mt-5'>
        <input type="text" placeholder='Buscar' className="form-control" value={buscado} onChange={(e) => setBuscado(e.target.value)} />
      </div>

      <div className='cards'>

        {filteredProducts.map(char => (
          <a type="button" className='card-text' href={`/characters/${String(char.id)}`}>
            <div className="card" style={{ width: "18rem", marginTop: "50px" }}>
              <img src={char.image} alt="card-img" />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <p className="card-text">{char.species}</p>
              </div>
            </div>
          </a>
        ))}

      </div>


      <div className='pagination'>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" onClick={() => decrementPage()}>Previous</a></li>

            {pag.map(p => (

              <li class="page-item"><a class="page-link" href="#" onClick={() => setCurrentPage(p)}>{p}</a></li>

            ))}

            <li class="page-item"><a class="page-link" onClick={() => incrementPage()}>Next</a></li>
          </ul>
        </nav>

      </div>

    </div>
  )
}
