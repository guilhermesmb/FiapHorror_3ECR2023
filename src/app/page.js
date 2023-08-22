import Image from 'next/image'
import Titulo from "@/components/Titulo";

export default function Home() {
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
      <Titulo>Ofertas</Titulo>
  </>
  )
}
