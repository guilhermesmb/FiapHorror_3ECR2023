import Image from 'next/image'
import Titulo from "@/components/Titulo.jsx";
import Botao from '@/components/Botao.jsx';
import Card from '@/components/Card';

export default function Home() {

  const jogos = [

    {
      titulo: "God of War",
      nota: 9.7,
      poster: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/5855660034a74cfe0e5fc8d57d17f4ac.png"
    },

    {
      titulo: "The Last of Us",
      nota: 10.0,
      poster: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/849d7b8124e44421cf640466299db4dc.png"
    }

  ]

  return ( // JSX
  <>
    <nav className='flex p-4 bg-sky-800'>
        <ul className='flex gap-20'>
          <li>
            <a href='#'>
              <h1>FiapGames</h1>  
            </a>
          </li>
          <li>
            <a href='#'>
              Favoritos
            </a>
          </li>
          <li>
            <a href='#'>
              PC
            </a>
          </li>
          <li>
            <a href='#'>
              Xbox
            </a>
          </li>
          <li>
            <a href='#'>
              PlayStation
            </a>
          </li>
        </ul>
      </nav>

      <Titulo>Favoritos</Titulo>

      <section className='flex flex-wrap m-4 p-2 leading-6'>

      {jogos.map(jogo => <Card jogo={jogo} /> )}

      </section>

      <Titulo>Ofertas</Titulo>

      <section className='flex flex-wrap m-4 p-2 leading-6'>

      {jogos.map(jogo => <Card jogo={jogo} /> )}

      </section>

  </>
  )
}
