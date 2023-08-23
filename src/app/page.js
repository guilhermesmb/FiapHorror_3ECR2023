import Image from 'next/image'
import Titulo from "@/components/Titulo.jsx";

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

      <div id="card" className='flex flex-col w-40 justify-center items-center'>
      <img className='rounded' src='https://place-hold.it/150x220/666' alt=''/>
      <span className='font-bold text-center line-clamp-1' >Titulo do Filme Card</span>
      <div>
        <span>6.0</span>
      </div>
      <a href='#' className='bg-sky-800 py-2 w-full rounded text-center' >detalhes</a>
      </div>

      <Titulo>Ofertas</Titulo>
  </>
  )
}
